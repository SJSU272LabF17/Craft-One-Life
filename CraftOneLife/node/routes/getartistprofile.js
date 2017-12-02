var mysql=require("./mysql");
var fs = require('fs');

var fetchUserProfile=function (req,res){
    console.log("In fetch profile")
    var sendLogs=[];
    var userdetail={};


    var get_profile = "select * from users where user_id=1";

    try {
        mysql.insertData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                console.log("User Profile ",results[0])
                var bitmap = fs.readFileSync(results[0].bookTilePath);
                //convert binary data to base64 encoded string
                //console.log(new Buffer(bitmap).toString('base64'))
                var data={
                    fname:results[0].fname,
                    lname:results[0].lname,
                    email:results[0].email,
                    contact_no:results[0].contact_no,
                    about_me:results[0].email,
                    profile_pic:(new Buffer(bitmap).toString('base64'))

                }
                res.status(201).json({status:'201',data:data});

            }
        }, get_profile)
    }

    catch(err){
        console.log(err);
    }

};



exports.fetchUserProfile = fetchUserProfile;