var http= require('http');
var fs= require('fs');

http.createServer(function(request,response){
    fs.readFile('sample.html',function(error,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        response.end();
    });
}).listen(8080);