// A simple ‘hello world’ server in node.js
var sys = require('sys'),
    http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello node');
}).listen(80);

sys.puts('Hello node listening on http://127.0.0.1:80');