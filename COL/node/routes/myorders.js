var mysql = require('./mysql')
var express = require('express')
var router = express();


var myorders = function(req,res) {
    var my_orders = [];

    var fetchDataSQL = "select b.book_id,book_name,bs.bookingId,qty,b.admin_price as price,total from books b,bookingdetails bd, bookings bs where bs.bookingId = bd.bookingId and bd.book_id = b.book_id and bs.user_id ="+req.body.user_id;
    mysql.fetchData(function (err, results) {
        if (err) {
            throw err;
        } else {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                my_orders.push(results[i]);
            }
            console.log(my_orders);
            res.status(201).json({message: "Data", data: my_orders,status:201});
        }
    }, fetchDataSQL);
};

exports.myorders = myorders;