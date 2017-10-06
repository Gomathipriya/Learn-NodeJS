var fs = require('fs');

fs.rename('Hello.txt','Hi.txt',function(err){
    if(err) throw err;
    console.log("File Renamed");
});