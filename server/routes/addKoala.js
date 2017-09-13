var express = require('express');
var router = require('express').Router();

var koalaArr = [];

router.post('/', function (req, res) {
    var koala = req.body;
    koalaArr.push(koala);
    res.sendStatus(201);
});

router.get('/', function (req, res) {
    res.send(koalaArr);
});

module.exports = router;