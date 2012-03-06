
var http = require("http");

var serverFunction = function(request,response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World - v.2");
	response.end();
}

http.createServer(serverFunction).listen(8888);
