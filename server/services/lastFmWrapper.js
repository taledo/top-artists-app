var request = require('request');
var config = require('../config/default');

var lastFmWrapper = function () {

	/*
		composeAPIPath
		@options | object
	*/
	this.composeAPIPath = function(options) {
		var base = config.LASTFM_API_URI,
			key = config.LASTFM_API_KEY,
			limit = options.limit ? options.limit : config.LASTFM_LIMIT,
			format = config.LASTFM_FORMAT,
			page =  options.page ? options.page : config.DEFAULT_PAGE,
			method = this.getAPIMethod(options.method),
			searchType = this.getSearchType(options.method) ? "&" + this.getSearchType(options.method) + "=" : "",
			searchTerm = options.searchTerm ? options.searchTerm : "";

		var apiURI = base + "?method=" + method +
			searchType + searchTerm +
			"&format=" + format +
			"&limit=" + limit +
			"&page=" + page +
			"&api_key=" + key;

		return apiURI;
	}

	/*
		getTopArtists
		@options | object
		@callback | function
	*/
    this.getLastFMData = function (options, callback) {

    	var requestUrl = this.composeAPIPath(options);

    	console.log(requestUrl);

		request.get({
	        url    : requestUrl,
	        headers: {
	            'Content-Type': 'application/json'
	        }
	    }, function (err, httpResponse, body) {
	        var status;
	        var result;

	        if (err) {
	            return callback(err);
	        }

	        status = httpResponse.statusCode;

	        try {
	            result = JSON.parse(body);
	        } catch (ex) {
	            return callback(ex);
	        }

	        if (!body || status === 404 || status === 500) {
	            console.log("Error : " + httpResponse.statusCode);
	        }


	        callback(result);
         });
    }


    this.getAPIMethod = function(type) {
    	switch(type) {
    		case "topArtists":
    			return config.LASTFM_TOP_ARTISTS_URI;
    		case "topTracks":
    			return config.LASTFM_TOP_TRACKS_URL;
    	}
    }

    this.getSearchType = function(type) {
    	switch(type) {
    		case "topArtists":
    			return "country";
    			break;
    		case "topTracks":
    			return "tag";
    			break;
    		default:
    			return false;
    	}
    }


}

module.exports = new lastFmWrapper();