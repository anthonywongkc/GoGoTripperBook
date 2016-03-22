var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stormpath = require('express-stormpath');

////////////////////////
// Define Router Paths //
////////////////////////
var routes = require('./routes/index');


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//stormpath for user login
app.use(stormpath.init(app, {
    apiKeyFile: './.stormpath/apiKey-2QJ7LR50XMN7ZC4Q4FMM6M49C.properties',
    secretKey: 'some_random_long_string_here',
    application: 'https://api.stormpath.com/v1/applications/5gW8aKppk8lSg2MUEdvWX'
}));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////////////////////////////////
// Routing Pages to functions //
////////////////////////////////
app.get('/', routes.index);
app.get('/plans', routes.plans);
app.get('/about', routes.about);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;