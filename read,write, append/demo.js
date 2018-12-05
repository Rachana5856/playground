var command=require('yargs').argv;
var fs=require('fs');
if(command.cmd==="save"){
    fs.writeFile('create.txt',command.product, function(err){
        if(err) throw err;
        console.log('saved');  
      
    });
}
