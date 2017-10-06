var fs = require('fs');

fs.unlink('Hi.txt',function(err){
    if(err) throw err;
    console.log("File deleted");
});