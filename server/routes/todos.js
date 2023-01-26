var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = require('../connection');

/* GET todos page. */
router.get('/', function (req, res) {
    let sql = `SELECT task_title, task_desc FROM todos`
    con.query(sql, function (err, result) {
        if (err) throw err;
        else {
            res.send(result)
        }
    })
})

/* POST todos page */
router.post('/', function (req, res, next) {
    let sql = `INSERT INTO todos (task_title, task_desc, user_id, isComplited) VALUES (
        '${req.body.task_title}','${req.body.task_desc}','${req.body.user_id}','${req.body.isComplited}'
        )`
    con.query(sql, function (err, result) {
        if (err) throw err;
    })
    console.log('req.query: ', JSON.stringify(req.body));
    res.send('task created');
});

/* PUT todos page. */
router.put('/', function (req, res) {
    let sql = `UPDATE todos SET isComplited = '${req.body.isComplited}' WHERE user_id = ${req.body.user_id} && task_title = '${req.body.task_title}'`
    console.log('sql: ', sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("UPDATES");
    });
    res.send('task id updated successfully')
});

module.exports = router;
