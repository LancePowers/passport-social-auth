var express = require('express');
var router = express.Router();
var passport = require('../auth/linkedin');

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/auth/linkedin',
    passport.authenticate('linkedin'));

router.get('/auth/linkedin/callback',
    passport.authenticate('linkedin', {
        failureRedirect: '/'
    }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

module.exports = router;