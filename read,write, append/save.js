var fs = require('fs');
fs.writeFile('test.txt','rachana',function(err){
    if(err) throw err;
    console.log('saved sucessfully');
});