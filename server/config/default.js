var config = {

    LASTFM_API_KEY: process.env.NODE_ENV || 'd3f706c99f731811d7da46348c32bcc2',
    LASTFM_SECRET: process.env.NODE_ENV || '4ea3526526d23543aba710c503e19cfe',
    LASTFM_API_URI: process.env.NODE_ENV || 'http://ws.audioscrobbler.com/2.0/',
    LASTFM_TOP_ARTISTS_URI: process.env.NODE_ENV || "geo.gettopartists",
    LASTFM_TOP_TRACKS_URL: process.env.NODE_ENV || "tag.gettoptracks",
    LASTFM_LIMIT: process.env.NODE_ENV || 5,
    DEFAULT_PAGE: process.env.NODE_ENV || 1,
    DEFAULT_COUNTRY: process.env.NODE_ENV || "australia",
    LASTFM_FORMAT: process.env.NODE_ENV || 'json'

};

module.exports = config;