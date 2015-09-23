var mongoose = require('mongoose');
var Schema = mongoose.Schema();
var config = require('../_config.js');

var User = new Schema({
    name: String,
    email: String,
    oauthID: String
})


module.exports = mongoose.model('users', User);