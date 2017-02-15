var request = require('request');
var cheerio = require('cheerio');

var target = 'http://u4bi.com';

request(target, function(err, response, body){
    if(!err && response.statusCode == 200) console.log(body);
});