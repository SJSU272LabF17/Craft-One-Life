var express = require('express');
var mysql = require('./mysql');


var doSignUp = function(req,res) {
    console.log("in DO signup of node" + req.body);
    var signup="insert into users (email,password,is_Approved,fname,lname,contact_no,about_me,user_type,user_earnings,profile_pic) values ('"+req.body.username+"','"+req.body.password+"',1,null,null,null,null,'U',null,null)";
    mysql.insertData(function (err, results) {

        res.status(201).json({status:'201'});


    }, signup)
};
exports.doSignUp=doSignUp;