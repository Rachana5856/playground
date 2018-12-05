var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "productdb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM product WHERE id = 1";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});
