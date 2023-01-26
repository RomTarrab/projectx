var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = require('../connection');

/* GET posts page. */
router.get('/', function (req, res) {
    let sql = `SELECT 'title', 'description', 'user_id'  FROM posts`
    con.query(sql, function (err, result) {
        if (err) throw err;
        else {
            res.send(result)
        }
    })
})

/* POST posts page */
router.post('/', function (req, res, next) {
    let sql = `INSERT INTO posts (title, description, user_id) VALUES (
        '${req.body.title}','${req.body.description}','${req.body.user_id}'
        )`
    con.query(sql, function (err, result) {
        if (err) throw err;
    })
    console.log('req.query: ', JSON.stringify(req.body));
    res.send('post created');
});

/* PUT posts page */
router.put('/', function (req, res) {
    let sql = `UPDATE posts SET title = '${req.body.title}', description = '${req.body.description}' WHERE user_id = ${req.body.user_id}`
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("UPDATED");
        res.send(result)
    });
});

module.exports = router;