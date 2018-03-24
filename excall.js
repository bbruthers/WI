var exrequest = require('request');

module.exports.GetWeatherFromService = function(geolat, geolng) {
    exrequest('api.openweathermap.org/data/2.5/weather?lat=geolat&lon=geolng', function (error, response, body) {
        if(response.statusCode == 200) {
            return body;
        }
        else {
            return error;
        }
    });

}