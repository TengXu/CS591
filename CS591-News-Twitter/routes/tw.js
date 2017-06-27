/**
 * Created by xt on 2017/6/22.
 */
const express = require('express')
const router = express.Router()

var Twitter = require('twitter');

/**  Load configuration information for Twitter API authorization. **/
let ck = require('../config/twitter').CONSUMER_KEY
let cs = require('../config/twitter').CONSUMER_SECRET
let ak = require('../config/twitter2').access_token_key
let as = require('../config/twitter2').access_token_secret

var client = new Twitter({
    consumer_key: ck,
    consumer_secret: cs,
    access_token_key: ak,
    access_token_secret: as
});

/**  Use the input name to search for tweets and return the tweets. **/
router.get('/:name', function(req, res, next){
    let userName = req.params.name
    client.get('search/tweets', {q: '@'+userName}, function(error, tweets, response) {
        res.json(tweets)
    });
})

module.exports = router;