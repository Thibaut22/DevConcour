var dgram = require('dgram');
var zlib = require('zlib');
var net = require('net');
var fs require('fs');

var server = dgram.createSocket('udp4');
var output = net.connect(8080, '51.255.62.71');

server.on("message", function(msg) {	
	var date = new Date();
	
	var day = date.getDate();
	var month = date.toString();
	month = month.substring(4,7);

	var heure = date.toLocaleTimeString();
	var tmp =  month + '  ' + day +' ' +heure;

	var buffer = new Buffer(msg, "utf-8");
	var bufferTmp = buffer.toString();
	
	var retour="\n";

	while(bufferTmp.substring(bufferTmp.length-1)==retour){
		bufferTmp =  bufferTmp.substring(0,bufferTmp.length-1);
	}

	if (bufferTmp.length==0){
		text=" ";
	} else {
		var espace=" \n";
		var testTemp1 = bufferTmp.replace(/\n/g,"#012");
		var text = testTemp1.replace(/\t/g,"#011");
	}

	output.write(tmp+" "+text+"\n");
	console.log(tmp+" "+text+"\n");
	fs.write("tmp.txt", text, function(err){
	
});
});

server.bind(514);