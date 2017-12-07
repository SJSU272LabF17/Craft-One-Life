var express = require('express');
var LocalStrategy = require("passport-local").Strategy;
var mysql = require('./mysql');

module.exports = function(passport) {
    passport.use('login', new LocalStrategy(function (username, password, done) {
        var reqUsername = username;
        var reqPassword = password;
        console.log("in login of node");
        var getUser = "select * from users where email='" + reqUsername + "' and password='" + reqPassword + "'";
        try {
            mysql.fetchData(function (err, results) {
                if (err) {
                    console.log(err);
                    done(err, null);
                }
                else {
                    if (results.length > 0) {
                        done(null, results);
                    }
                    else {
                        done(null, null);
                    }


                }
            }, getUser)
        }

        catch (err) {
            console.log(err);
        }

    }));
}




