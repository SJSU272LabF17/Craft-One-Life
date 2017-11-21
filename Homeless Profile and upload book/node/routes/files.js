var express = require('express');
var router = express.Router();
var multer = require('multer');
var mysql=require("./mysql");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log("Headers", req.headers)
        cb(null,req.headers.path)
    },
    filename: function (req, file, cb) {
        var fname=file.originalname;
        console.log(fname)
        cb(null, file.originalname);

    },
});

var upload = multer({storage:storage});

router.post('/upload', upload.any(), function (req, res, next) {
    var flag = true;
    var now = new Date();
    console.log("In upload data")
    console.log("request data is ",req.body);

    var insert_book="INSERT into books (book_name,book_path,user_price,book_desc,user_id) values ('"+req.body.title+"','"+req.body.path+"','"+req.body.price+"','"+req.body.desc+"',1)";

     try {


         mysql.insertData(function (err, results) {
             if (err) {
                 console.log(err);
                 res.status(500).json({message: "An error occured"});
             }
             else {

                 res.status(201).send("successful");

             }

         }, insert_book)
     }
     catch(err){
         console.log(err);
     }

});

module.exports = router;