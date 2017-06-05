/**
 * Created by xt on 2017/6/3.
 */
const express = require('express')
const router = express.Router()
const request = require("request");

router.get('/:name', function (req, res, next) {
    let theName = req.params.name
    let theBreed = req.query.breed
    res.send({'string': theName, 'length': theBreed })
})

router.post('/', function (req, res, next) {
    //console.log(req.body.test1)
    res.json(req.body)
})

module.exports = router