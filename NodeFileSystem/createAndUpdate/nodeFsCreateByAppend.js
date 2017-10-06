var fs = require('fs');

fs.appendFile('sample.txt','HI',function(err){
    if(err) throw err;
    console.log('Saved File');
})