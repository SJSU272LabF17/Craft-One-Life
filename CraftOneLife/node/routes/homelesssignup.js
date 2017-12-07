var express = require('express');
var mysql = require('./mysql');
var nodemailer = require('nodemailer');

var homelessSignup = function(req,res) {
    console.log("in DO signup of node" + req.body);
    var signup = "insert into craftone.users (email, password, fname, lname, is_Approved,user_type) values ('"+req.body.email+"','"+req.body.password+"','"+req.body.fname+"','"+req.body.lname+"','0','H')";


    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Homeless Signup ",results[0])

                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'genesisworld23@gmail.com',
                        pass:'genesis23'
                    }});

                var mailOptions = {
                    from: 'genesisworld23@gmail.com', // sender address
                    to: req.body.email, // list of receivers
                    subject: 'Artist Account Confirmation ', // Subject line
                    text: 'Thank you for your interest in CraftOneLife!\n' +
                    '\n' +
                    'We are currently accepting new applications!  Please expect to receive a response within 1-2 months.\n' +
                    '\n' +
                    '\n' +
                    'Thank you so much for your interest in CraftOneLife.\n' +
                    '\n' +
                    'Best,\n' +
                    'CraftOneLife Team\n', // plaintext body
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        return console.log(error);
                    }
                    else {
                        res.code="200";
                        console.log('Message sent: ' + info.response);

                    }
                    callback(null,res);
                });

                res.status(201).json({status:'201'});

            }
        }, signup)
    }

    catch(err){
        console.log(err);
    }
};
exports.homelessSignup=homelessSignup;