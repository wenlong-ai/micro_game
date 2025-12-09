import argparse
import http.server
import socketserver
from pathlib import Path


def main() -> None:
    parser = argparse.ArgumentParser(description="Start a local server for the Lianliankan game")
    parser.add_argument("--port", type=int, default=8000, help="Port to bind the HTTP server to")
    args = parser.parse_args()

    root = Path(__file__).resolve().parent
    handler = http.server.SimpleHTTPRequestHandler
    handler.directory = str(root)

    with socketserver.TCPServer(("0.0.0.0", args.port), handler) as httpd:
        print(f"Serving Lianliankan on http://localhost:{args.port}/index.html")
        print("Press Ctrl+C to stop the server.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")


if __name__ == "__main__":
    main()
