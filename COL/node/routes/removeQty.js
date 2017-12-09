var mysql = require('./mysql');

var removeQuantity = function(req,res) {
    console.log("in remove user id" + JSON.stringify(req.body.user_id));
    console.log("in remove book id" + JSON.stringify(req.body.book_id));
    console.log(req.session);
    var checkCart = "select * from cart where user_id="+req.body.user_id+" and book_id="+req.body.book_id;

    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                if(results.length>0)
                {
                    console.log("============= in add quantity"+req.session.user);
                    var qty=results[0].quantity-1;
                    var updateCart="";
                    if (qty!=0)
                        updateCart="update cart set quantity="+qty+" where user_id="+req.body.user_id+" and book_id="+req.body.book_id;
                    else
                        updateCart="delete from cart where user_id="+req.body.user_id+" and book_id="+req.body.book_id;
                    mysql.insertData(function (err, results) {
                        if(!err)
                            res.status(201).json({status:'201'});
                    }, updateCart)
                }

            }
        }, checkCart)

    }
    catch(err){
        console.log(err);
    }
};
exports.removeQuantity=removeQuantity;