var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose/');
var restify = require('restify');
var route = require('./routes');

var server = restify.createServer();

var app = express();

server.use(restify.bodyParser());
//server.use(restify.fullResponse());
//app.use(logger('dev'));
//app.use(bodyParser.json());

var config = require('./config');

db = mongoose.connect(config.mongoose_auth_local);

app.models = require('./models/index');
app.routers = require('./routes');

server.get('/user',route.userinfo.getUserInfo);
server.post('/user',route.userinfo.postUserInfo);

server.get('/listdevices',route.deviceinfo.getDeviceInfo);
server.post('/device',route.deviceinfo.postDeviceInfo);

server.post('/login',route.loginuser.postLoginUser);

server.post('/userlog',route.loguser.postUserLog);
server.get('/userlog',route.loguser.getUserLog);
server.post('/userlog/update',route.loguser.updateUserLog);

server.listen(3000, function () {
    console.log("Server started @ 3000");
});

//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));



//app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}
//
//// production error handler
//// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});


//module.exports = app;
