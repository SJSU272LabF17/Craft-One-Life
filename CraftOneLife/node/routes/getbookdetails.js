var mysql=require("./mysql");
var fs = require("fs");
var getBookDetails =  function (req,res) {

//var bookname = req.body.book_name

   // console.log("in node of getbookdetails" + bookname);

    //var get_profile = "select * from books where book_name="+"'"+bookname+"'";
    //

    var get_books="select * from books b,users u where isApproved='1' and u.user_id=b.user_id";

    try {
        mysql.fetchData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                
                var authorImage="";
                var resultFiles = [];
                for(var i=0;i<results.length;i++)
                {
                    var bitmap = fs.readFileSync(results[i].bookTilePath);

                    if(results[i].profile_pic===null || results[i].profile_pic==="" || results[i].profile_pic==="undefined")
                    {
                        authorImage=""
                    }else
                    {
                        authorImage=(new Buffer(fs.readFileSync(results[i].profile_pic)).toString('base64'))
                    }

                    var data={
                    bookId:results[i].book_id,
                    bookName:results[i].book_name,
                    bookPrice:results[i].admin_price,
                    bookDesc:results[i].book_desc,
                    bookTilePath:(new Buffer(bitmap).toString('base64')),
                    aboutAuthor:results[i].about_me,
                }
                resultFiles.push(data);
                }
                //console.log("in node" + JSON.stringify(resultFiles));
                res.status(201).json({status:'201',data:resultFiles});

            }
        }, get_books)
    }

    catch(err){
        console.log(err);
    }

};


exports.getBookDetails = getBookDetails;
