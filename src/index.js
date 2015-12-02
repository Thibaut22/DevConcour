var zlib = require('zlib');
var dgram = require('dgram');
var net = require('net');

var server = dgram.createSocket('udp4')

server
.on("message", function(msg) {
   console.log(msg.toString("utf8"));
});

//.pipe(zlib.createGzip())
//.pipe(net.connect(1010, 'localhost'));

server.bind(5140);
