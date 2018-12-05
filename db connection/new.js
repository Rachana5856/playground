var mysql = require('mysql');
var command=require('yargs').argv
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "productdb"
});
if(command.cmd==='newticket')
{
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var data={productno:command.productno,phone_no:command.phone_no,email:command.email,location:command.location};
  //var sql = "",data;
  con.query('INSERT INTO product SET ?',data, function (err, result,fields) {
    if (err) throw err;
    console.log("Preparing to save");
    console.log("1 record inserted");
  
  });
});
}
/*else if(command.cmd==='updateticket')
{
    con.connect(function(err){
        if (err) throw err;
        console.log("connected")
        var data={productno:command.productno,id:command.email};
        con.query('UPDATE product SET productno=? WHERE id=?',data,function(err,result){
        
            if (err) throw err;
            console.log("Preparing to update");
            console.log('1 record updated'); 
    
    });
    });
}*/ 
    if(command.cmd==='update')
    con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE product SET email = 'Canyon 123' WHERE id = 1";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("updating ticket");
    console.log('1 record updated');
    });
  });
else{
    console.log("unknown");
}
