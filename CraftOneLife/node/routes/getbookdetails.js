var mysql=require("./mysql");
var fs = require("fs");
var getBookDetails =  function (req,res) {

//var bookname = req.body.book_name

   // console.log("in node of getbookdetails" + bookname);

    //var get_profile = "select * from books where book_name="+"'"+bookname+"'";
    //

    var get_books="select * from books where isApproved='1'";

    try {
        mysql.fetchData(function (err, results) {
            if (err) {
                console.log(err);
            }
            else {
                //console.log("Book Details ",results[0]);
                //var bitmap = fs.readFileSync(results[0].bookTilePath);
                var resultFiles = [];
                for(var i=0;i<results.length;i++)
                {
                    var bitmap = fs.readFileSync(results[i].bookTilePath);

                    var data={
                    bookId:results[i].book_id,
                    bookName:results[i].book_name,
                    bookPrice:results[i].admin_price,
                    bookDesc:results[i].book_desc,
                    bookTilePath:(new Buffer(bitmap).toString('base64'))
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
