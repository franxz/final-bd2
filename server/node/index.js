const express = require('express');
const app = express();
const morgan = require('morgan');


//Database
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://username:password@host:port/database') // create the database

db.any('SELECT $1 AS value', 123)//example of query
  .then(function (data) {
    console.log('DATA:', data.value)
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
///

//settings
app.set('appName', 'TPFinal_BBDD2');
app.set('port', 3000);

//middlewares
app.use(express.json());
app.use(morgan('dev'));


//routing

app.all('/', (req, res, next) => {
    console.log(`Ya paso fangio`);
    next();
});

app.get('/', (req, res) => {
    res.send("Alguito");
});

app.get('/home', (req, res) => {
    res.send("Home");
});



//front
app.use(express.static('public'));
//iniciar server
app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log(`Server on port`, app.get('port'));
});