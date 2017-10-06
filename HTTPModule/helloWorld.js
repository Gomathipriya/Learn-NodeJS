var http = require("http");
var date = require("./dateModule.js");
var url = require('url');

http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/html'});
	//response.write("Hi Time is "+date.dateModule());
	//response.write(request.url);
	var query = url.parse(request.url,true).query;
	var text = query.year+" "+query.month;
	response.end(text);
}).listen(8080);

//run node dateModule.js
//run node helloWorld.js

//response.write("Hi Time is "+date.dateModule());
//Will return Hi Time is current time when hitting http://localhost:8080

//response.write(request.url);
//will return /Home when hitting http://localhost:8080/Home
//will return /Login when hitting http://localhost:8080/Login

//response.end("Hello World");
// will return Hello World when hitting http://localhost:8080

//var query = url.parse(request.url,true).query;
//var text = query.year+" "+query.month;
//response.end(text);
//will return 2017 July when hitting http://localhost:8080/?year=2017&month=July
