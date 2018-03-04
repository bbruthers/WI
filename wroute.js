var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var hbs = require('hbs');

var app = express();
app.set('view engine', 'hbs');


app.listen('2143', function cbListener() {
    console.log(hbs.VERSION);
    console.log('Server started on port 2143');
});