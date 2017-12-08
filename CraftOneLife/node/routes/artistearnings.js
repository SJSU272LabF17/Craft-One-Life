var mysql=require("./mysql");
var fs = require('fs');

var getEarnings=function (req,res){
    console.log("In get earnings")


    var getEarnings = "select bd.book_id,b.book_name as name,qty,user_price from bookingdetails bd,books b where b.book_id=bd.book_id and b.user_id="+req.body.user_id;

    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                if (results.length > 0) {
                    console.log("--------in earning results",results);
                    var total = 0;
                    var resultFiles = [];
                    for (var i = 0; i < results.length; i++) {

                        var data = {
                            bookId: results[i].book_id,
                            bookName: results[i].name,
                            bookPrice: results[i].user_price,
                            bookQty:results[i].qty,
                            bookTotal:parseFloat(results[i].user_price)*parseFloat(results[i].qty)
                        };

                        total+=data.bookTotal;

                        resultFiles.push(data);
                    }
                    res.status(201).json({status:'201',data:resultFiles,total:total,earnings:0.4*total});
                }
            }
        }, getEarnings)
    }

    catch(err){
        console.log(err);
    }

};



exports.getEarnings = getEarnings;