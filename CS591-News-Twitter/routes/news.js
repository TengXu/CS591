/**
 * Created by xt on 2017/6/22.
 */
const express = require('express')
const router = express.Router()

const GoogleNewsRss = require('google-news-rss');

const googleNews = new GoogleNewsRss();

/**  When the location is null, use "US" as the default location to search for news. **/
router.get('/', function(req, res, next) {
    let title = 'US'  /** default location **/
    googleNews
        .search(title)
        .then(resp => res.json(resp));
})

/**  Get the information from input, use the information to search for news via googleNews, and return the news. **/
router.get('/:name', function(req, res, next) {
    let title = req.params.name
    googleNews
        .search(title)
        .then(resp => res.json(resp));
})

module.exports = router;