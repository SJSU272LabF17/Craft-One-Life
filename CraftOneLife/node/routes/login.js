var express = require('express');
var LocalStrategy = require("passport-local").Strategy;
var mysql = require('./mysql');

module.exports = function(passport) {
    passport.use('login', new LocalStrategy(function (username, password, done) {
        var reqUsername = username;
        var reqPassword = password;
        console.log("in login of node");
        done(null, {
            username: username
            // user:filelist
        });
}));
};

