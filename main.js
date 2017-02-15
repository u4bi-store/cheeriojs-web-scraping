var request = require('request');
var cheerio = require('cheerio');

var target = 'https://github.com/u4bi';

request(target, function(err, response, body){
    if(!err && response.statusCode == 200){
        $ = cheerio.load(body);
        
        $('.user-profile-nav a .counter').each(function(index, title){
            console.log($(title).text());
        });

        $('.mt-4 li .repo').each(function(index, title){
            console.log('레포 타이틀 : '+$(title).text());
        });
        
    }
});