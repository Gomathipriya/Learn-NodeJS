var formidable = require('formidable');
var http = require('http');
var fs= require('fs');

http.createServer(function(request,response){
    if(request.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(request,function(err,fields,files){
            console.log(files);
            var oldPath = files.path;
            var newPath = "G:/Git/LearnNodeJS/FileUpload"+files.name;
            fs.rename(oldPath,newPath,function(err){
                if(err) throw err;
                response.write("File Uploaded and place in path");
                response.end();
            });
        })
    }
    else{
        response.writeHead(200,{'Content-type':'text/html'});
        response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        response.write('<input type="file" name="fileupload"><br>');
        response.write('<input type="submit">');
        response.write('</form>');
        return response.end();
    }
}).listen(8080);