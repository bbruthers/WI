var exrequest = require('request');

module.exports.GetWeatherFromService = function(geolat, geolng) {
    var reqTest = 'http://api.openweathermap.org/data/2.5/weather?lat=' + geolat + '&' + 'lon=' + geolng + '&APPID=4a6a346b36485dfd7ab43e7e6c54ae45';
    exrequest.get(reqTest, function (error, response, body) {
        if(!error) {
            return body;
        }
        else {
            return error;
        }
    });

}