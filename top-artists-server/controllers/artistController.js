var request = require('request');
var config = require('../config/default');
var lastFmWrapper = require('../services/lastFmWrapper');

var artistController = function () {

    /*
        fetchArtists 
    */
    this.fetchArtists = function (req, res, next) {

        //Set options for request with fallback to defaults
        var options = {
            page: req.query.page ? req.query.page : config.DEFAULT_PAGE,
            searchTerm: req.query.country ? req.query.country : config.DEFAULT_COUNTRY,
            method: "topArtists"
        }

        res.setHeader('Access-Control-Allow-Origin', '*');

        lastFmWrapper.getLastFMData(options, function(response) {
            if(response) {
                res.status(200).send(response);
            } else {
                //TODO: Handle errors 
                res.status(400).send("Bad Request");
            }
        });  
    };


    /*
        fetchArtists 
    */
    this.fetchTracks = function (req, res, next) {

        //Set options for request with fallback to defaults
        var options = {
            page: req.query.page ? req.query.page : config.DEFAULT_PAGE,
            searchTerm: req.query.tag ? req.query.tag : "",
            method: "topTracks"
        }

        res.setHeader('Access-Control-Allow-Origin', '*');

        lastFmWrapper.getLastFMData(options, function(response) {
            if(response) {
                res.status(200).send(response);
            } else {
                //TODO: Handle errors 
                res.status(400).send("Bad Request");
            }
        });  
    };

}


module.exports = artistController;