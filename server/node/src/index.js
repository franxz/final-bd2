const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport/passport-google');

const app = express();

/***
 * 
 * login passport-google-oauth
 */
 app.use(cookieSession({
    name: 'google-auth-session',
    keys: ['key1', 'key2']
  }))
  
  app.use(passport.initialize());
  app.use(passport.session());
/**
 * end 
 */




//setting
app.set('views',path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extend: false}));

//routes
app.use('/', require('./routes/index'));



//starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});