var OAuth = require('oauth').OAuth;

// Replace these values with actual tokens
var accessToken = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
var accessTokenSecret = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

var oauth = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    'Consumer Key',
    'Consumer Secret',
    '1.0',
    'CallBack URL',
    'HMAC-SHA1'
);

// Twitter API end point to get recent 10 tweets from user time line. Replace screen_name value with twitter id.
var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=XXXXXXXXXXXXXXXXX&count=10';

// Make a get request to twitter RESt API
oauth.get(url, accessToken, accessTokenSecret, function (err, body, response) {

    if (!err && response.statusCode == 200) {
        success(body);
    } else {
        error(err, response, body);
    }
});

// Error Handling 
var error = function (err, response, body) {
	console.log('ERROR [%s]', err);
};

// Success response Handling
var success = function (data) {
    console.log('Data [%s]', data);
};