# micro_game

This repository contains a standalone Python crawler that collects article information from [yygrammar.com](http://www.yygrammar.com/Article/n/).

## Requirements

The crawler relies only on the Python standard library and should work with Python 3.10+.

## Usage

```bash
python yygrammar_crawler.py --output yygrammar_articles.json --max-pages 5 --delay 0.5
```

Arguments:
- `--output`: Where to write the JSON file. Defaults to `yygrammar_articles.json` in the project root.
- `--max-pages`: Maximum number of list pages to crawl. If omitted, it will keep requesting `list_<n>.html` until it receives a 404.
- `--delay`: Delay (in seconds) inserted after each HTTP request to be polite to the source site.

The output JSON is an array of objects with the keys `title`, `url`, `publish_date`, and `body`.
