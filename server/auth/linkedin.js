var passport = require('passport');
var User = require('../models/user');
var config = require('../_config');
var LinkedInStrategy = require('passport-linkedin');

passport.use(new LinkedInStrategy({
        consumerKey: config.linkedin.clientID,
        consumerSecret: config.linkedin.clientSecret,
        callbackURL: config.linkedin.callbackURL
    },
    function (token, tokenSecret, profile, done) {

        console.log(profile);
        var searchQuery = {
            name: profile.displayName
        }
        var updates = {
            name: profile.displayName,
            oauthID: profile.id
        };

        var options = {
            upsert: true
        };

        User.findOneAndUpdate(searchQuery, updates, options, function (err, user) {
            if (err) {
                return done(err);
            } else {
                return done(null, user)
            }
        });
    }
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});

module.exports = passport;