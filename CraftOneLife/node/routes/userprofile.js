var mysql=require("./mysql");

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

exports.saveUserProfile = saveUserProfile;