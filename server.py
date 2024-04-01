import http.server
import socketserver
import os

PORT = 8000

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def guess_type(self, path):
        _, ext = os.path.splitext(path)
        if ext == '.js':
            return 'application/javascript'
        return super().guess_type(path)

Handler = CustomHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
