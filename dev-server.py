#!/usr/bin/env python3
"""
Local dev server for this SPA. Plain `python -m http.server` won't work
correctly here because routes like /work/ or /project/pos/ have no real
directory on disk (they're handled client-side via pushState) — a plain
static server would 404 on them, or serve a stale prerendered shell.
This server always serves index.html for any non-static-asset path.

Usage: python3 dev-server.py [port]   (default port: 8934)
"""
import http.server
import os
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8934
ROOT = os.path.dirname(os.path.abspath(__file__))
STATIC_EXT = (".js", ".css", ".png", ".webp", ".jpg", ".jpeg", ".svg", ".ico", ".pdf", ".xml", ".txt", ".json", ".map", ".mp4", ".webm")


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=ROOT, **kw)

    def do_GET(self):
        clean = self.path.split("?")[0]
        if not clean.lower().endswith(STATIC_EXT):
            self.path = "/index.html"
        return super().do_GET()

    def log_message(self, format, *args):
        pass  # quieter output


if __name__ == "__main__":
    print(f"Serving {ROOT} at http://localhost:{PORT}/")
    print("Press Ctrl+C to stop.")
    http.server.HTTPServer(("", PORT), Handler).serve_forever()
