var express = require('express');
//var bodyParser = require('body-parser');
var exrequest = require('request');
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

    if(lat !== null && lng !== null) {
        var test = exrequest('api.openweathermap.org/')
    }
    else {
        response.render('index');
    }
    
});

app.get('/testpass', function(request,response){
    response.render('passtest', {testpasshb: 'hello from hb'});
});

app.listen('2143', function cbListener() {    
    console.log('Server started on port 2143');
});