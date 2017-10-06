var fs = require('fs');

fs.open('test.txt','w',function(err){
    if(err) throw err;
    console.log("Created by Open");
});