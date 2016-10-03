var http = require('http');
var fs = require('fs');

var gpio = require('rpi-gpio');

gpio.setup(18, gpio.DIR_OUT);

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.end(fs.readFileSync('index.html'));

  if (request.url == '/on') {
    gpio.write(18, true);
  } else {
    gpio.write(18, false);
  }
}).listen(8000);

console.log("Listening on port 8000...");
