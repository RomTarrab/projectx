var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "itay1258",
    database: "database_x"
});

con.connect(function (err) {
    if (err) console.log('connection ERROE:', err);
})

module.exports = con