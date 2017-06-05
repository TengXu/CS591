/**
 * Created by xt on 2017/6/3.
 */
const express = require('express')
const router = express.Router()
const request = require("request");

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/:name', function(req,res,next){
    let theName = req.params.name
    res.send({'string' : theName, 'length' : theName.length})
})

router.post('/', function (req, res, next) {
    res.send({'string':req.body, 'length':req.body.length})
})

module.exports = router