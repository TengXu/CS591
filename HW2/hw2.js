const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

const db = mongoose.connection
db.once('open', function(){
    console.log('Connection successful.')
})

const Schema = mongoose.Schema
const stringSchema = new Schema({
    string: String,
    length: Number
})

const string = mongoose.model('string', stringSchema)

let findByName = function (output) {
    return new Promise(function (resolve, reject) {
        string.find({string: output}, function (err, results) {
            if (results.length > 0) {
                resolve({found: results})
            }
            else {
                reject({found: false})
            }
        })
    })
}

router.get('/', function(req, res, next){
    string.find({}, function(err, results){
        res.send(results);
    })
})

router.get('/:name', function(req, res, next){
    let input = req.params.name
    let input_len = input.length
    findByName(input)
        .then(function(status){
            res.json(status)
        })
        .catch(function(status){
            const aString = new string( {string : input, length: input_len} )
            aString.save(function(err){
                if(err) {res.send(err)}
                else{res.json(aString)}
            })
        })
})

router.post('/',function(req, res, next){
    let input = req.body.input
    if(input == null){
        res.send({'string not detected'})
    }
    else if(input.length == 0){
        res.send({'string not detected'})
    }
    else{
    let input_len = input.length
    findByName(input)
        .then(function(status){
            res.json(status)
        })
        .catch(function(status){
            const aString = new string( {string : input, length: input_len} )
            aString.save(function(err){
                if(err) {res.send(err)}
                else{res.send(aString)}
        })
    })}
})

router.delete('/:name',function(req, res, next){
    let input = req.params.name
    findByName(input)
        .then(function(status){
            string.remove( {string : input}, function(err, result){
                if(err){throw err}
                else{res.json({message:'Delete Sucess'});}
            })
        })
        .catch(function(status){
            res.json({message:'String not found'})
        })
	})

module.exports = router;