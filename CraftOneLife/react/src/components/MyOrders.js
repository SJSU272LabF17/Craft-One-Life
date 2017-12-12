import React, {Component, PropTypes} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import * as API from '../api/API';

var padding = {padding:0}

class MyOrders extends Component{

    state = {
        my_orders:[],
        message:''
    };

    componentWillMount(){
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id};
        //alert("in payload" + JSON.stringify(payload));
        API.getOrders(payload)
            .then((res) => {
                //alert("back in my bookings : " + JSON.stringify(res));
                if (res.status === 201) {
                    //alert("Bookings fetched");
                    this.setState({my_orders:res.data})
                }
                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })

    };

    render(){
        return(
            <div className="search-page" style={padding}>
                <div className="container">
                    {/*<div className="search-grids">
                        <div className="col-md-3">

                        </div>

                    </div>*/}
                    <div><br/></div>
                    <div className="col-md-12 ">
                        <br/>
                        <h2 style={{color:"green"}}>My Orders</h2>
                        <hr/>
                        <br/>
                        <table id="tableMenu" className="table">
                            <tbody>
                            <tr>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Booking ID </th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Book</th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Quantity </th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Price per book </th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Total order Amount </th>
                            </tr>
                            {this.state.my_orders.map(order=>

                                <tr >
                                    <td style={{ padding:0, textAlign: 'left'}}>{order.bookingId}</td>
                                    <td style={{ padding:0, textAlign: 'left'}}>{order.book_name}</td>
                                    <td style={{ padding:0, textAlign: 'left'}}>{order.qty}</td>
                                    <td style={{ padding:0, textAlign: 'left'}}>{order.price}</td>
                                    <td style={{padding:0, textAlign: 'left'}}>{order.total}</td>
                                </tr>

                            )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>


        );
    }
}
export default withRouter(MyOrders);