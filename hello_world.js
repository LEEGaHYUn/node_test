var http = require('http');

http.createServer( function handler (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Server Test</h1>');
    res.end('Hello World!\n');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337');