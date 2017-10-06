var fs = require('fs');

fs.writeFile('write.txt','Hi',function(err){
    if(err) throw err;
    console.log('Created File using Write');
});