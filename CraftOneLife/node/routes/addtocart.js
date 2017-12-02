var mysql = require('./mysql');

var addToCart = function(req,res) {
    console.log("in addtocart" + JSON.stringify(req.body.user_id));
console.log(req.session);
    var checkCart = "select * from cart where user_id="+req.body.user_id+" and book_id="+req.body.bookId;

    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                if(results.length>0)
                {
                    console.log("============= in addatocart"+req.session.user);
                    var qty=results[0].quantity+1;
                    //var updateCart="update cart set quantity="+qty+" where user_id="+req.session.user+" and book_id="+req.body.bookId;
                    var updateCart="update cart set quantity="+qty+" where user_id="+req.body.user_id+" and book_id="+req.body.bookId;
                    mysql.insertData(function (err, results) {



                        res.status(201).json({status:'201'});


                    }, updateCart)
                }
                else
                {

                    var insertcart="insert into cart values('"+req.body.user_id+"','"+req.body.bookId+"','"+req.body.bookPrice+"','"+req.body.bookName+"',1)";
                    mysql.insertData(function (err, results) {



                        res.status(201).json({status:'201'});


                    }, insertcart)

                }





            }
        }, checkCart)

    }

    catch(err){
        console.log(err);
    }

};
exports.addToCart=addToCart;