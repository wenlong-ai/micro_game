from __future__ import annotations

import argparse
import json
import re
import sys
import time
from dataclasses import dataclass
from html.parser import HTMLParser
from typing import Iterable, List, Set
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

BASE_URL = "http://www.yygrammar.com/Article/n/"
USER_AGENT = "Mozilla/5.0 (compatible; yygrammar-crawler/1.0)"
DEFAULT_DELAY = 0.5


def decode_body(raw_body: bytes, content_type: str | None) -> str:
    charset = None
    if content_type:
        match = re.search(r"charset=([\\w-]+)", content_type, re.IGNORECASE)
        if match:
            charset = match.group(1)
    tried: List[str] = []
    for encoding in filter(None, [charset, "utf-8", "gb18030"]):
        tried.append(encoding)
        try:
            return raw_body.decode(encoding)
        except UnicodeDecodeError:
            continue
    raise UnicodeDecodeError("", b"", 0, 0, f"Failed to decode using {tried}")


def fetch_html(url: str, *, delay: float) -> str:
    req = Request(url, headers={"User-Agent": USER_AGENT, "Referer": BASE_URL})
    with urlopen(req, timeout=15) as resp:
        content_type = resp.headers.get("content-type")
        body = resp.read()
    if delay:
        time.sleep(delay)
    return decode_body(body, content_type)


class ListPageParser(HTMLParser):
    def __init__(self, base_url: str):
        super().__init__()
        self.base_url = base_url
        self.links: Set[str] = set()

    def handle_starttag(self, tag: str, attrs):
        if tag != "a":
            return
        href = dict(attrs).get("href")
        if not href:
            return
        absolute = urljoin(self.base_url, href)
        path = urlparse(absolute).path.lower()
        if not path.startswith("/article/n/"):
            return
        if "list" in path or "index" in path:
            return
        if not path.endswith(".html"):
            return
        self.links.add(absolute)


def extract_publish_date(text: str) -> str | None:
    match = re.search(r"(20\\d{2}[./-]\\d{1,2}[./-]\\d{1,2})", text)
    if match:
        return match.group(1)
    return None


@dataclass
class Article:
    title: str | None
    url: str
    publish_date: str | None
    body: str


class ArticleParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title_parts: List[str] = []
        self.heading_parts: List[str] = []
        self.body_parts: List[str] = []
        self._in_title = False
        self._in_heading = False
        self._skip = 0

    def handle_starttag(self, tag: str, attrs):
        if tag in {"script", "style"}:
            self._skip += 1
            return
        if tag == "title":
            self._in_title = True
        if tag in {"h1", "h2"}:
            self._in_heading = True
        if tag == "br":
            self.body_parts.append("\n")

    def handle_endtag(self, tag: str):
        if tag in {"script", "style"} and self._skip:
            self._skip -= 1
            return
        if tag == "title":
            self._in_title = False
        if tag in {"h1", "h2"}:
            self._in_heading = False
        if tag in {"p", "div"}:
            self.body_parts.append("\n")

    def handle_data(self, data: str):
        if self._skip:
            return
        cleaned = data.strip()
        if not cleaned:
            return
        if self._in_title:
            self.title_parts.append(cleaned)
        elif self._in_heading:
            self.heading_parts.append(cleaned)
        else:
            self.body_parts.append(cleaned)

    def result(self) -> Article:
        title = " ".join(self.title_parts).strip() or None
        heading = " ".join(self.heading_parts).strip() or None
        text_body = " ".join(self.body_parts)
        publish_date = extract_publish_date(text_body)
        return Article(title=heading or title, url="", publish_date=publish_date, body=text_body)


def parse_article(html: str) -> Article:
    parser = ArticleParser()
    parser.feed(html)
    return parser.result()


def find_article_links(list_html: str, list_url: str) -> Set[str]:
    parser = ListPageParser(list_url)
    parser.feed(list_html)
    return parser.links


def iter_list_pages(max_pages: int | None = None) -> Iterable[str]:
    yielded: Set[str] = set()
    first_pages = [urljoin(BASE_URL, "Index.html"), urljoin(BASE_URL, "list_1.html")]
    for url in first_pages:
        if url in yielded:
            continue
        yielded.add(url)
        yield url
    page = 2
    while max_pages is None or page <= max_pages:
        url = urljoin(BASE_URL, f"list_{page}.html")
        yield url
        page += 1


def crawl_site(max_pages: int | None = None, delay: float = DEFAULT_DELAY) -> List[Article]:
    articles: List[Article] = []
    seen_article_urls: Set[str] = set()
    for list_url in iter_list_pages(max_pages):
        try:
            list_html = fetch_html(list_url, delay=delay)
        except HTTPError as exc:
            if exc.code == 404:
                break
            print(f"[WARN] Unable to fetch list page {list_url}: {exc}", file=sys.stderr)
            continue
        except URLError as exc:
            print(f"[WARN] Network error for list page {list_url}: {exc}", file=sys.stderr)
            continue

        links = find_article_links(list_html, list_url)
        if not links:
            continue
        for article_url in links:
            if article_url in seen_article_urls:
                continue
            seen_article_urls.add(article_url)
            try:
                article_html = fetch_html(article_url, delay=delay)
            except HTTPError as exc:
                print(f"[WARN] Unable to fetch article {article_url}: {exc}", file=sys.stderr)
                continue
            except URLError as exc:
                print(f"[WARN] Network error for article {article_url}: {exc}", file=sys.stderr)
                continue
            article = parse_article(article_html)
            article.url = article_url
            articles.append(article)
    return articles


def save_articles(articles: List[Article], output: str) -> None:
    payload = [
        {
            "title": article.title,
            "url": article.url,
            "publish_date": article.publish_date,
            "body": article.body,
        }
        for article in articles
    ]
    with open(output, "w", encoding="utf-8") as fh:
        json.dump(payload, fh, ensure_ascii=False, indent=2)


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Crawl yygrammar.com article metadata")
    parser.add_argument("--output", default="yygrammar_articles.json", help="Path to write JSON data")
    parser.add_argument("--max-pages", type=int, default=None, help="Maximum number of list pages to crawl")
    parser.add_argument("--delay", type=float, default=DEFAULT_DELAY, help="Delay between HTTP requests in seconds")
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_arg_parser().parse_args(argv)
    articles = crawl_site(max_pages=args.max_pages, delay=args.delay)
    save_articles(articles, args.output)
    print(f"Collected {len(articles)} articles -> {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
