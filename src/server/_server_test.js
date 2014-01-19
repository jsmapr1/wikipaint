
"use strict";

var server = require("./server.js");
var http = require("http");

exports.tearDown = function(done) {
	server.stop(function() {
		done();
	});
};

//TODO: handle case where stop() is called before start()
//TODO: test-drive stop() callback

exports.testServerRespondsToGetRequests = function(test) {
	server.start();
	http.get("http://localhost:8080", function(response) {
		response.on("data", function(){});
		test.done();
	});
};

exports.testServerReturnsHelloWorld = function(test) {
	server.start();
	var request = http.get("http://localhost:8080");
    request.on("response", function(response) {
        response.setEncoding('utf8');
        test.equal(200, response.statusCode, "status code");
		response.on("data", function(chunk){
            test.equal("Hello, world", chunk, "response text");
        });
        response.on("end", function() {
            test.done();
        });
	});
};
