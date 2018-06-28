var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static('public'));

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', function(request, response){
    response.render('index');
});

app.get('/weather', function(request, response){
    var lat = request.query.lat;
    var lng = request.query.lng;

    if(lat !== undefined || lng != undefined) {
        //var exrequest = require('request');
        var rp = require('request-promise');
        var reqTest = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&' + 'lon=' + lng + '&APPID=';

        var options = {
            uri: 'http://api.openweathermap.org/data/2.5/weather',
            qs: {
                lat: lat,
                lon: lng,
                APPID: ''
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        rp(options)
        .then(function(body) {
            //console.log('body: ' + body);
            var imgParse = require('./wImgRetriever');
            var wimg = imgParse.GetWeatherIconFromID(body);
            var weatherRespObject = {
                weatherInfo: body,
                weatherImage: wimg
            };
            
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(weatherRespObject));
            response.end();
            
        })
        .catch(function(err) {
            console.log('error: ' + err);
            response.writeHead(400);
            response.end();
        });
    }
});

app.get('/weatherfive', function(request, response){
    var lat = request.query.lat;
    var lng = request.query.lng;

    if(lat !== undefined || lng != undefined) {
        //var exrequest = require('request');
        var rp = require('request-promise');
        var reqTest = 'http://api.openweathermap.org/data/2.5/forcast?lat=' + lat + '&' + 'lon=' + lng + '&APPID=';
       
        var options = {
            uri: 'http://api.openweathermap.org/data/2.5/forcast',
            qs: {
                lat: lat,
                lon: lng,
                APPID: '4a6a346b36485dfd7ab43e7e6c54ae45'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true
        };

        rp(options)
        .then(function(body) {
            
            response.writeHead(200, {'Content-Type': 'application/json'});
            response.write(JSON.stringify(body));
            response.end();
            
        })
        .catch(function(err) {
            console.log('error: ' + err);
            response.writeHead(400);
            response.end();
        });
    }
});

app.get('/testpass', function(request,response){
    response.render('passtest', {testpasshb: 'hello from hb'});
});

app.listen('2143', function cbListener() {    
    console.log('Server started on port 2143');
});