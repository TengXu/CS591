/**
 * Created by xt on 2017/6/3.
 */
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/:name', function(req,res,next){
    let theName = req.params.name
    res.send({'string' : theName, 'length' : theName.length})
});

// router.post('/', function (req, res, next) {
//     res.send({'string':req.body.test1, 'length':req.body.test1.length})
// });

router.post('/', function (req,res,next) {
    let theName = req.body.name;
    let theLength = theName.length
    let response = {
        name: theName,
        length: theLength
    }
    res.json(response)
});


module.exports = router;