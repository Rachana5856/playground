var command=require('yargs').argv
var fs=require('fs')
var validator = require('validator');
 
console.log(validator.isEmail(command.email) );



if(command.cmd==='newticket')
{
  
    fs.appendFile("file.txt","product= "+command.productno+" "+"\n"+"phone num="+command.phone_no+" "+"\n"+"email="+command.email+""+"\n",function(err){
        if (err) throw err
        console.log("preparing to save");
    });
}
else if(command.cmd==='updateticket')
{
    fs.writeFile("file.txt",'utf8',"product= "+command.productno+" ",function(err){
        if (err) throw err

        console.log("preparing to update",command.productno);
    });
}
else{
console.log("no such command");

}
