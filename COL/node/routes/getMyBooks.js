var mysql = require('./mysql')
var express = require('express')
var router = express();


var mybooks = function(req,res) {
    var my_books = [];

    var fetchDataSQL = "select * from books where user_id ="+req.body.user_id;
    mysql.fetchData(function (err, results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                my_books.push(results[i]);
            }
            console.log(my_books);
            res.status(201).json({message: "Data", data: my_books,status:201});
        }
    }, fetchDataSQL);
};

exports.myorders = mybooks;