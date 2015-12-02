var udp = require('datagram-stream');

var stream = udp({
    address: '0.0.0.0',
    unicast: '127.0.0.1',
    port: 5140,
    reuseAddr: true
});

stream.pipe(process.stdout);
