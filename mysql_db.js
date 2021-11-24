var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_demo"
});


module.exports = {
  get: () => con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
  }), 
  // post: () => con.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "INSERT INTO customers (name, age, email) VALUES ('Company Inc', 'Highway 37')";
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // }),
  //update: ()=> ... 
  //delete: ()=> ...
};