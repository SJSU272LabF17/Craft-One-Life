var mysql = require('./mysql');
var fs = require('fs');

var userCart = function(req,res) {

    console.log("in user cart", req.body.user_id);

    var showCartDetails = "select cart.book_id, books.book_name,books.bookTilePath, books.book_desc,cart.admin_price, cart.quantity from cart inner join books where cart.book_id=books.book_id and cart.user_id="+req.body.user_id;
    console.log("query is "+showCartDetails);
    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    console.log("--------in results",results);

                    var resultFiles = [];
                    for (var i = 0; i < results.length; i++) {
                        var bitmap = fs.readFileSync(results[i].bookTilePath);

                        var data = {
                            bookId: results[i].book_id,
                            bookName: results[i].book_name,
                            bookPrice: results[i].admin_price,
                            bookDesc: results[i].book_desc,
                            bookQty:results[i].quantity,
                            bookTilePath: (new Buffer(bitmap).toString('base64'))
                        };
                        resultFiles.push(data);
                    }
                    res.status(201).json({status:'201',data:resultFiles});
                }
                else
                {
                    res.status(201).json({status:'201',data:[]});
                }
            }
        }, showCartDetails)

    }

    catch(err){
        console.log(err);
    }


};


var deleteBookQuantity = function(req,res) {
    console.log("in handle cart delete 1 ",req.body)
    console.log("in handle cart delete" + req.body.user_id + "----" +req.body.book_id);

    var deleteBook = "delete from cart where cart.book_id="+req.body.book_id+" and cart.user_id="+req.body.user_id;
    console.log("query is "+deleteBook);

    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {

                res.status(201).json({
                    status:'201'
                });
            }

        }, deleteBook)

    }

    catch(err){
        console.log(err);
    }
};

exports.userCart=userCart;
exports.deleteBookQuantity=deleteBookQuantity;