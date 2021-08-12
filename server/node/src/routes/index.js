const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../database');

//routes

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/signup', (req, res, next) => {
    res.render('signup');
});

router.post('/signup', (req, res, next) => {
    console.log(req.body);
    res.send('received');
});

router.get('/signin', (req, res, next) => {

});

router.post('/signin', (req, res, next) => {
    
});


/***
 * login passport-google-oauth
 * 
 */

 router.get("/", (req, res) => {
    res.json({message: "You are not logged in"})
})

router.get("/failed", (req, res) => {
    res.send("Failed")
})
router.get("/success", (req, res) => {
    res.send(`Welcome ${req.user.email}`)
})

router.get('/google',
    passport.authenticate('google', {
            scope:
                ['email', 'profile']
        }
    ));

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        res.redirect('/success')

    }
);


/*end of passport-google-oauth*/

router.get("/jessi", (req, res) => {
    res.send(`Welcome jessi`)
})


//prueba de creacion de tabla
router.get('/create', db.createTable);

//prueba get

router.get('/getUserById/:user_id', db.getUserById);

router.get('/getusers', db.getUsers);

//Exportar las rutas
module.exports = router;
