import React, {Component} from 'react';
import * as API from '../api/API';
var creditCardValidator = require('credit-card-validator')

const itemChange = (newItem) => {

    var toggle = document.getElementById(newItem);

    if(toggle.style.display === 'none'){
        toggle.style.display = 'block';
    }else{
        toggle.style.display = 'none';
    }
}

class UserCart extends Component{

    state={
        cartList:[],
        quantity:'',
        bookId:'',
        quantiy:'',
        total:0
    }
    componentWillMount() {

        this.getDetails();


    };
    getDetails = () =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id};
        API.getCartDetails(payload)
            .then((res) => {
                //alert("back in handle cart delete response : " + JSON.stringify(res));
                if(res.status==='201'){
                    this.setState({
                        cartList: res.data
                    });
                    var total=0;
                    for(var i=0;i<this.state.cartList.length;i++)
                    {
                        var book = parseInt(this.state.cartList[i].bookPrice)*parseInt(this.state.cartList[i].bookQty);
                        total+=book;
                        //alert(this.state.cartList[i].price);
                    }
                    this.setState({total:total})
                    //this.state.total=total
                    // alert(this.state.total)
                }
            });
    };



    handleAddQuantity = (tile) =>{
        console.log(tile)
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id,book_id:tile.bookId};
        console.log("in payload" + JSON.stringify(payload));
        API.handleAddQuantity(payload)
            .then((res) => {
                //  alert("back in handle cart delete response : " + JSON.stringify(res));
                if (res.status === '201') {
                    alert("Quantity increased succesfully");
                    this.getDetails()
                }
                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })

    };

    handleRemoveQuantity = (tile) =>{
        alert("----------------"+JSON.stringify(tile));
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id,book_id:tile.bookId};
        console.log("in payload remove" + JSON.stringify(payload));
        API.handleRemoveQuantity(payload)
            .then((res) => {
                //  alert("back in handle cart delete response : " + JSON.stringify(res));
                if (res.status === '201') {
                    alert("Quantity decreased succesfully");
                    this.getDetails()
                }
                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })

    };


    handleCartDelete = (tile) =>{
        console.log("tile",tile)
        var user_id=localStorage.getItem("user_id");
        var payload={'user_id':user_id, 'book_id':tile.bookId};
        console.log("in paylod delete " + JSON.stringify(payload));
        API.doHandleCartDelete(payload)
            .then((res) => {
                //  alert("back in handle cart delete response : " + JSON.stringify(res));
                if (res.status === '201') {
                    alert("Book deleted succesfully");
                    this.getDetails()
                }
                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })

    };

    handleCheckOut = (data) => {

        var cardnumber = document.getElementById("cardnumber").value;
        var cvv = document.getElementById("cvv").value;
        var expiry = document.getElementById("expiry").value;
        var name = document.getElementById("name").value;

        var parts = expiry.split("/");
        var part1 = parts[0];
        var part2 = parts[1];

        var regex = /\d/g;


        document.getElementById('cardvalidator').style.display = 'none';
        document.getElementById('cvvvalidator').style.display = 'none';
        document.getElementById('expiryvalidator').style.display = 'none';
        document.getElementById('namevalidator').style.display = 'none';

        if (!creditCardValidator.validateCard(cardnumber)) {
            document.getElementById('cardvalidator').style.display = 'block';
            document.getElementById('cardvalidator').innerHTML = 'Invalid card number';
        } else if (cvv.length != 3 || isNaN(Number(cvv))) {
            console.log(Number(cvv));
            document.getElementById('cvvvalidator').style.display = 'block';
            document.getElementById('cvvvalidator').innerHTML = 'Invalid CVV';
        } else if (isNaN(Number(part1)) || isNaN(Number(part2)) || expiry.charAt(2) != '/' || part1 > 31) {
            document.getElementById('expiryvalidator').style.display = 'block';
            document.getElementById('expiryvalidator').innerHTML = 'Invalid expiry date';
        } else if (regex.test(name)) {
            document.getElementById('namevalidator').style.display = 'block';
            document.getElementById('namevalidator').innerHTML = 'Invalid name';
        } else {

            var user_id = localStorage.getItem("user_id");
            var payload = [];
            for (var i = 0; i < this.state.cartList.length; i++) {
                var payloadArr = {
                    book_id: data[i].bookId,
                    quantity: data[i].bookQty
                };
                payload.push(payloadArr);
            }


            var payload = {total: this.state.total, user_id: user_id, payload: payload};
            alert("in handlecheckout " + JSON.stringify(payload));

            API.doHandleCheckOut(payload)
                .then((res) => {
                    //  alert("back in handle cart delete response : " + JSON.stringify(res));
                    if (res.status === '201') {
                        alert("Added succesfully");
                        this.doEmptyCart();
                    }

                    else if (res.status === '401') {
                        this.setState({
                            message: JSON.stringify(res.errors)
                        });
                        console.log(this.state.message);

                    }

                })
        }
    };
    doEmptyCart = () =>{
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id};
        alert("in payload" + JSON.stringify(payload));
        API.doEmptyCart(payload)
            .then((res) => {
                alert("back in handle cart delete response : " + JSON.stringify(res));
                if (res.status === '201') {
                    alert("Deleted succesfully");
                    this.props.history.push("/myorders")
                    this.getDetails();
                }
                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })

    };

    render() {
        var total=0;
        console.log("in render _--------" + this.state.cartList);
        return (
            <div className="col-sm-10 col-md-10">
                <h1>Continue Shopping</h1>
                <h3><i>With each sale a majority of the proceeds goes directly back to the artist who created the original work.</i></h3>

                <br/>
                <br/>
                <div className="row">
                    <h5 style={{textAlign:'left'}}>Product</h5>
                    &nbsp;&nbsp;&nbsp;
                    <h5 style={{textAlign:'left'}}>Desciption</h5>
                </div>
                <hr/>
                <div className="row">
                    { this.state.cartList.map(tile => (


                        <div className="col-md-12">
                            <div className="list-group-item clearfix">
                                <div className="pull-left">
                                    <img src={"data:image/jpeg;base64,"+tile.bookTilePath} height={100} width={200} alt={tile.bookTilePath} />
                                </div>
                                <div className="pull-left">
                                    <h4 className="list-group-item-heading">{tile.bookName}</h4>
                                    <p className="list-group-item-text">{tile.bookDesc}</p>
                                    <p className="list-group-item-text">{tile.bookPrice}</p>
                                    <p className="list-group-item-text">{tile.bookQty}</p>

                                    <p className="list-group-item-text">{tile.price}</p>

                                </div>

                                <div className="pull-right" style={{width:300}}>

                                    <button
                                        className="btn btn-success"
                                        type="button"
                                        onClick={() => this.handleAddQuantity(tile)}>
                                        +
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        type="button"
                                        onClick={() => this.handleRemoveQuantity(tile)}>
                                        -
                                    </button>
                                    <button className="btn btn-success" onClick={()=>this.handleCartDelete(tile)}> Delete </button>

                                </div>

                                <div className="row">




                                </div>





                            </div>
                            <br/>
                        </div>

                    ))

                    }
                    <p className="list-group-item-text">total : $ {this.state.total}</p>

                    <br/>

                    <div id="payment" style={{display:'none'}} class="collapse">

                        <div className="row">

                            <div id="centerbarmain" className="center-block col-md-6">

                                <div className="form-group">
                                    <input id="cardnumber"
                                           className="form-control"
                                           type="text"
                                           label="Card Number"
                                           placeholder="Card Number"
                                           onChange={(event) => {

                                           }}
                                    />
                                </div>

                                <div>
                                    <p id="cardvalidator"></p>
                                </div>

                                <div className="form-group">
                                    <input id="expiry"
                                           className="form-control"
                                           type="text"
                                           label="Expiry"
                                           placeholder="Expiry"
                                           onChange={(event) => {

                                           }}
                                    />
                                </div>

                                <div>
                                    <p id="cvvvalidator"></p>
                                </div>

                                <div className="form-group">
                                    <input id="cvv"
                                           className="form-control"
                                           type="text"
                                           label="CVV"
                                           placeholder="CVV"
                                           onChange={(event) => {

                                           }}
                                    />
                                </div>

                                <div>
                                    <p id="expiryvalidator"></p>
                                </div>

                                <div className="form-group">
                                    <input id="name"
                                           className="form-control"
                                           type="text"
                                           label="Card Holders Name"
                                           placeholder="Card Holders Name"
                                           onChange={(event) => {

                                           }}
                                    />
                                </div>

                                <div>
                                    <p id="namevalidator"></p>
                                </div>
                                <div ><button className="btn btn-success" onClick={()=>this.handleCheckOut(this.state.cartList)}>Proceed to checkout</button></div>
                                {/*<div id="change" className="form-group">
                                        <button id="change"
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={() => console.log("book clicked")}>
                                            Order Now
                                        </button>
                                    </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div><button className="btn btn-success" onClick={()=>itemChange("payment")}>Order</button></div>

            </div>
        )
    }
}
export default UserCart;