var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.listen('2143', function cbListener() {
    console.log('Server started on port 2143');
});