var express = require('express');
var router = require('express').Router();
var pool = require('../modules/pool');

//var koalaArr = [];

router.post('/', function (req, res) {
    var koala = req.body;
//    koalaArr.push(koala);
    //res.sendStatus(201);
    pool.connect(function (err, client, done) {
        if (err) {
            console.log('line 13', err);
            res.sendStatus(500);            
        } else {
            var queryString = 'INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ($1, $2, $3, $4, $5)';
            var values = [koala.name, koala.gender, koala.age, koala.ready_for_transfer, koala.notes];
            client.query(queryString, values, function(queryErr, resultObj) {
                done(); 
                if (queryErr) {
                    console.log('line 20', queryErr);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            })
        }
    })
});

router.get('/', function (req, res) {
    //res.send(koalaArr);
    pool.connect(function (err, client, done) {
        if (err) {
            console.log(err);
            res.sendStatus(500);            
        } else {
            client.query('SELECT * FROM koalas', function (queryErr, resultObj){
                done();
                if (queryErr) {
                    console.log(queryErr);
                    res.sendStatus(500);                    
                } else {
                    res.send(resultObj.rows);
                }
            });
        }
    })
});

module.exports = router;