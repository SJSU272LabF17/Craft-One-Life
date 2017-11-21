var express = require('express');
var router = express.Router();
var mysql=require("./mysql");




/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doLogin', function (req, res, next) {

    var email = req.body.email;
    var reqPassword = req.body.password;



    var getUser="select * from users";

    try {


        mysql.fetchData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {

                if (results.length > 0) {


                }
                else {

                    console.log("Invalid Login");
                    res.status(401).send({message: "Login failed"});

                }
            }

        }, getUser);
    }
    catch (err){
        console.log(err);
    }

});

router.get('/getallusers', function (req, res, next) {


    var getUsers = "select * from users where is_approved=0";
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
                    res.status(201).send(resarray);
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
    var approveUsers = "update users set is_approved=1 where email='"+req.body.email+"'";

    try {


        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
                res.status(500).json({message: "An error occured"});
            }
            else {

                res.status(201).send("successful");

            }

        }, approveUsers)
    }
    catch(err){
        console.log(err);
    }

});


module.exports = router;
