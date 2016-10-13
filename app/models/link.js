var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

var Link = mongoose.model('link', db.linksSchema);

module.exports = Link;
