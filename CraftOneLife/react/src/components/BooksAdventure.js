import React, {Component} from 'react';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

class BooksAdventure extends Component{

    state={
        books:[]
    };


    componentDidMount() {

        API.getBookDetails()
            .then((res) => {
               // alert(JSON.stringify(res));
                this.setState({
                    books: res.data
                });
            });


    };

    addToCart = (bookdata) => {
        bookdata.user_id=localStorage.getItem("user_id");
        API.addToCart(bookdata)
            .then((res) => {
                alert("back in newer homepage : " + JSON.stringify(res));
                if (res.status === '201') {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        //username: userdata.username
                    });
                    //this.props.history.push("/artistwelcomepage");
                } else if (res.status === '401') {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-12">

                    { this.state.books.map(tile => (


                    <div className="col-md-3">
                        <div className="list-group-item clearfix">
                            <div className="pull-right">
                                <img src={"data:image/jpeg;base64,"+tile.bookTilePath} height={100} width={200} alt={tile.bookTilePath} />

                            </div>
                            <div className="pull-right" style={{textAlign:'center', width:200}}>

                                <h4 className="list-group-item-heading">NAME : {tile.bookName}</h4>
                                <p className="list-group-item-text">PRICE : $ {tile.bookPrice}</p>
                                <button className="btn btn-success btn-sm" onClick={()=>this.addToCart(tile)}> ADD TO CART </button>

                            </div>
>
                                <div className="row">



                                </div>





                        </div>
                    <br/>
                    </div>
                    ))}






                </div>
            </div>
        );
    }
}
export default BooksAdventure;