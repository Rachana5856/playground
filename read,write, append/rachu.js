var fs = require('fs');
fs.writeFile('mat.txt','rachana',function(err){
    if(err) throw err;
    console.log('saved sucessfully');
});