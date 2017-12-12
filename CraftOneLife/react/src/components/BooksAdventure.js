import React, {Component} from 'react';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import {Modal} from 'react-bootstrap';
import Avatar from 'react-avatar';

class BooksAdventure extends Component{

    state={
        books:[],
        show_modal:false,
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

    open = () => {
        this.setState({show_modal: true})
    }

    close = () => {
        this.setState({show_modal: false});
    };

    addToCart = (bookdata) => {
        bookdata.user_id=localStorage.getItem("user_id");
        var tempBookData = {...bookdata};
        tempBookData.bookTilePath="";
        API.addToCart(tempBookData)
            .then((res) => {
                //alert("back in newer homepage : " + JSON.stringify(res));
                if (res.status === '201') {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        //username: userdata.username
                    });
                    alert("Successfully added to cart");
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

                    <Modal show={this.state.show_modal} onHide={() => {
                        this.close()
                    }}>
                        {/* <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>*/}
                        <Modal.Body>
                            <div className="col-sm-12 col-md-12">
                                <div>
                                    <Avatar src={"data:image/jpeg;base64,"+this.state.aboutAuthor} round={true} size={150} alt={this.state.profile_pic}/>
                                </div>

                                <div className="col-sm-4 col-md-4"><p>About Author : </p></div>
                                <div className="col-sm-8 col-md-8">



                                    <div className="input-field">
                                        <input className="form-control"
                                               style={{height:150, textAlign:'top'}}

                                               type="text"
                                               disabled={true}
                                               value={this.state.aboutAuthor}
                                               onChange={(event)=>{
                                                   this.setState({
                                                       about_me:event.target.value
                                                   });
                                               }}
                                               required

                                        />
                                    </div>
                                    <br/>
                                </div>

                                <div className="col-sm-4 col-md-4"><p>About Book : </p></div>
                                <div className="col-sm-8 col-md-8">



                                    
                                </div>
                                <br/>

                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <div className="col-sm-10 col-md-10">


                                <button onClick={() => {
                                    this.close()
                                }}>Close
                                </button>
                            </div>
                        </Modal.Footer>
                    </Modal>

                    { this.state.books.map(tile => (


                        <div className="col-md-3">
                            <br/>
                            <div className="list-group-item clearfix" style={{height:215,width:250}}>
                                <div className="pull-right">
                                    <img src={"data:image/jpeg;base64,"+tile.bookTilePath} height={100} width={200} alt={tile.bookTilePath} onClick={()=>{this.open()}} />

                                </div>
                                <div className="pull-right" style={{textAlign:'center', width:200}}>

                                    <h4 className="list-group-item-heading">NAME : {tile.bookName}</h4>
                                    <p className="list-group-item-text">PRICE : $ {tile.bookPrice}</p>
                                    <button className="btn btn-success btn-sm" onClick={()=>this.addToCart(tile)}> ADD TO CART </button>

                                </div>

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