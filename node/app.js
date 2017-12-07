var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require("client-sessions");
var passport = require('passport');
require('./routes/login')(passport);
var index = require('./routes/index');
var login = require('./routes/login');
var signup = require('./routes/signup');
var homelesssignup = require('./routes/homelesssignup');
var files = require('./routes/files');
var userprofile = require('./routes/userprofile');
var bookdetails = require('./routes/getbookdetails');
var getartistprofile = require('./routes/getartistprofile');
var addToCart = require('./routes/addtocart');
var proceedCheckout = require('./routes/proceedcheckout');
var addQty = require('./routes/addQuantity')
var removeQty = require('./routes/removeQty')
var admin = require('./routes/admin');
var cart = require('./routes/cart');

var app = express();


app.use(session({
    cookieName: 'session',
    secret: 'cmpe273_test_string',
    duration: 30 * 60 * 1000,    //setting the time for active session
    activeDuration: 5 * 60 * 1000  }))

//Enable CORS
var corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/getUserProfile',getartistprofile.fetchUserProfile);

app.use('/', index);
app.post('/doSignUp',signup.doSignUp);
app.post('/handleHomelessSignup',homelesssignup.homelessSignup);
app.use('/files',files);
app.use('/saveUserProfile',userprofile);
app.post('/getBookDetails',bookdetails.getBookDetails);
app.post('/addToCart',addToCart.addToCart);
app.post('/userCart',cart.userCart);
app.post('/deleteBookQuantity',cart.deleteBookQuantity);
app.post('/proceedCheckout',proceedCheckout.proceedCheckout);
app.post('/emptyCheckout',proceedCheckout.emptyCheckout);
app.post('/addQty',addQty.addQuantity);
app.post('/removeQty',removeQty.removeQuantity);
app.use('/admin',admin);

app.post('/login',function(req, res,next) {
    console.log("username in app" + JSON.stringify(req.body));
    passport.authenticate('login', function(err, user) {
        if(err) {
            res.status(500).send();
        }

        if(!user) {
            res.status(401).send();
        }
        req.session.user = user[0].email;
        req.session.user_id = user[0].user_id;
        console.log(req.session)
        console.log(req.session.user);
        console.log("session initialized");
        console.log("back in app.js" + JSON.stringify(user));

        return res.status(201).send({
            results: user,
            status: '201'});
    })(req, res,next);
});

app.post('/logout', function(req,res) {
    console.log(req.session.user);
    req.session.destroy();
    console.log('Session Destroyed');
    res.status(201).send();
});



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});




// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    console.log(err);

    // render the error page
    res.status(err.status || 500);
    res.json('error');
});

module.exports = app;
