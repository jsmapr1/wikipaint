

var http = require("http");

var server = http.createServer();

server.on("request", function(request, response){
	var body = "<html><body>Test</body></html>";
	//console.log('starting stuff');
	response.end(body);
});

server.listen(8080);
