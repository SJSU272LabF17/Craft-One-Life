var express = require('express');
var router = express.Router();
var mysql=require("./mysql");
var nodemailer = require('nodemailer');


router.get('/getallusers', function (req, res, next) {


    var getUsers = "select * from users where is_Approved=0 and user_type='H'";
    var resarray=[];
    try {

        mysql.fetchData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {

                if (results.length > 0) {

                    for(var i=0;i<results.length;i++)
                    {
                        resarray.push(results[i]);
                    }
                    var data = {status:201,resarray:resarray};
                    res.status(201).send(data);
                }
                else {


                    res.status(201).send(resarray);

                }
            }

        }, getUsers)
    }
    catch(err){
        console.log(err);
    }

});

router.post('/approveuser', function (req, res) {


    console.log("approveuser",req.body.email);
    var approveUsers = "update users set is_Approved=1  where email='"+req.body.email+"'";

    try {


        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'genesisworld23@gmail.com',
                        pass:'genesis23'
                    }});

                var mailOptions = {
                    from: 'genesisworld23@gmail.com', // sender address
                    to: req.body.email, // list of receivers
                    subject: 'Artist Account Approval ', // Subject line
                    text: 'We have reviewed your profile!\n' +
                    '\n' +
                    'You can now login with your credentials from our portal.\n' +
                    '\n' +
                    '\n' +
                    'Thank you so much for your interest in CraftOneLife.\n' +
                    '\n' +
                    'Best,\n' +
                    'CraftOneLife Team\n', // plaintext body
                };

                transporter.sendMail(mailOptions, function(error, info){
                    if(error){
                        return console.log(error);
                    }
                    else {
                        res.code="200";
                        console.log('Message sent: ' + info.response);

                    }
                    callback(null,res);
                });


                res.status(201).send("successful");

            }

        }, approveUsers)
    }
    catch(err){
        console.log(err);
    }

});

router.get('/getallbooks', function (req, res, next) {


    var getUsers = "select * from books where isApproved=0";
    var resarray=[];
    try {

        mysql.fetchData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {

                if (results.length > 0) {

                    for(var i=0;i<results.length;i++)
                    {
                        resarray.push(results[i]);
                    }
                    var data = {status:201,resarray:resarray}
                    res.status(201).send(data);
                }
                else {


                    res.status(201).send(resarray);

                }
            }

        }, getUsers)
    }
    catch(err){
        console.log(err);
    }

});

router.post('/approvebook', function (req, res) {


    console.log("approvebooks",req.body);
    var approveBooks = "update books set isApproved=1,admin_price="+parseInt(req.body.u.user_price)*1.2+" where book_id='"+req.body.u.book_id+"'";

    try {


        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {

                res.status(201).send("successful");

            }

        }, approveBooks)
    }
    catch(err){
        console.log(err);
    }

});

module.exports = router;