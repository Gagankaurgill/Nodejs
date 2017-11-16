var http = require("http");
http.createServer(function (req,res){
	res.writeHead(200,{"Content-Type":"text\plain"});
	var fs = require("fs");
	fs.readFile("\\nodejs\\callbacks.txt",function(err,data){
		if(err) console.error(err);
		res.end(data.toString());
		
	});
}).listen(8081);
console.log("successful hosting at http://127.0.0.1:8081");

