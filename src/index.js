var zlib = require('zlib');
var dgram = require('dgram');
var net = require('net');

var server = dgram.createSocket('udp4')

var output = zlib.createGzip()
.pipe(net.connect(8080, 'localhost'));

server
.on("message", function(msg) {
   output.write(msg);
});

server.bind(5140);
