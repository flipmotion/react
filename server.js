var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
var port = Number(process.env.PORT || 3000);

server.listen(port);