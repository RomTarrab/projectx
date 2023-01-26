var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = require('../connection');

/* GET users page. */
router.get('/', function (req, res) {
  let sql = `SELECT id , firstName, lastName FROM users`
  con.query(sql, function (err, result) {
    if (err) throw err;
    else {
      res.send(result)
    }
  })
})

/* POST users page */
router.post('/', function (req, res, next) {
  let sql = `INSERT INTO users(id, firstName, lastName, mobile, email, user_id) VALUES (
        '${req.body.id}','${req.body.firstName}','${req.body.lastName}','${req.body.mobile}','${req.body.email}','${req.body.user_id}'
        )`
  con.query(sql, function (err, result) {
    if (err) throw err;
  })
  console.log('req.query: ', JSON.stringify(req.body));
  res.send('user created');
});

router.put('/', function (req, res) {
  let sql = `UPDATE users SET firstName = '${req.body.firstName}',lastName = '${req.body.lastName}',mobile = '${req.body.mobile}',email = '${req.body.email}' WHERE id = ${req.body.id}`
  console.log('sql: ', sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("UPDATES");
  });
  res.send('done')
});

// var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
module.exports = router;