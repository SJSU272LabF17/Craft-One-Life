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
        // var now = new Date();
        var fname=file.originalname ;
        console.log(fname)
        cb(null, fname);

    },
});

var upload = multer({storage:storage});

router.post('/upload', upload.any(), function (req, res, next) {
    console.log("In upload profile pic");
    console.log("request data is ",req.body);
    console.log("request file is ",req.files);


    if(req.files.length>0)
    var update_profile = "update users set email='"+req.body.email+"',fname='"+req.body.fname+"',lname='"+req.body.lname+"',contact_no='"+req.body.contact_no+"',about_me='"+req.body.about_me+"',profile_pic='./public/uploads/Profile_pics/"+req.files[0].filename+"' where user_id=1";
    else
        var update_profile = "update users set email='"+req.body.email+"',fname='"+req.body.fname+"',lname='"+req.body.lname+"',contact_no='"+req.body.contact_no+"',about_me='"+req.body.about_me+"' where user_id=1";


    try {


        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {

                res.status(201).send("successful");

            }

        }, update_profile)
    }
    catch(err){
        console.log(err);
    }




});

module.exports = router;

/*
var saveUserProfile =  function (req,res) {
    console.log("In save user profile ",req.body)

    var update_profile = "update users set email='"+req.body.email+"',fname='"+req.body.fname+"',lname='"+req.body.lname+"',contact_no='"+req.body.contact_no+"',about_me='"+req.body.about_me+"' where user_id=1";

    try {


        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {

                res.status(201).send("successful");

            }

        }, update_profile)
    }
    catch(err){
        console.log(err);
    }


};
*/

