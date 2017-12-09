var mysql = require('./mysql');
var fs = require('fs');

var proceedCheckout = function (req, res) {

    console.log("details------------ " + JSON.stringify(req.body.payload));
    console.log("details------------ " + JSON.stringify(req.body.payload));
    console.log("details------------ " + JSON.stringify(req.body.user_id));
    console.log("details------------ " + JSON.stringify(req.body.total));


    var insertQuery = "insert into bookings (user_id,total) values('" + req.body.user_id + "','" + req.body.total + "')";
    console.log("query is " + insertQuery);


    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                if (results) {
                    console.log("--------in results", results.insertId);

                    var bookingId = results.insertId;


                    for (i = 0; i < req.body.payload.length; i++) {


                        var insertQueryBookings = "insert into bookingDetails (bookingId,book_id,qty) values('" + bookingId + "','" + req.body.payload[i].book_id + "','" + req.body.total + "')";

                        console.log("query is " + insertQueryBookings);


                        try {
                            mysql.insertData(function (err, results) {
                                if (err) {
                                    console.log(err);
                                }

                                else {
                                    if (results) {
                                        console.log("-------- second in results", results);



                                    }
                                }
                            }, insertQueryBookings)

                        }

                        catch (err) {
                            console.log(err);
                        }
                    }
                    res.status(201).json({status: '201'});

                    }
                }
            },insertQuery)


    }

    catch (err) {
        console.log(err);
    }


};

var emptyCheckout = function (req, res) {
    console.log("in handle cart delete" + req.body.user_id);

    var emptyCart = "delete from cart where cart.user_id="+req.body.user_id;
    console.log("query is "+emptyCart);

    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                if(results)
                {
                    res.status(201).json({
                        status:'201'
                    });
                }

            }
        }, emptyCart)

    }

    catch(err){
        console.log(err);
    }
};

exports.proceedCheckout = proceedCheckout;
exports.emptyCheckout = emptyCheckout;
