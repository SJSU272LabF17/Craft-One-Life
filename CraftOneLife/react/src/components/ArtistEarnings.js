import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import '../css/bootstrap.css';
import * as API from '../api/API';

import adrian from '../images/Adrian.png';

class ArtistEarnings extends Component{

    state={
        data:[],
        earnings:0

    };

    componentWillMount(){
        var user_id = localStorage.getItem("user_id");

        var payload = {user_id:user_id};
        API.fetchEarnings(payload)
            .then((response) => {
                //alert("fetch earnings response" + JSON.stringify(response.data));
               // alert("fetch earnings response" + JSON.stringify(response.total));
                //alert("fetch earnings response" + JSON.stringify(response.earnings));
                this.setState({
                    data:response.data,
                    earnings:response.earnings
                });
                console.log("current state ",this.state)
            });

    };
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12">
                    <h3 style={{color:'green'}}><u>My Earnings</u></h3>
                    <hr/>
                    <br/>
                </div>
            <div className="col-sm-8 col-md-8">
                { this.state.data.map(tile => (


                    <div className="col-md-12">
                        <div className="list-group-item clearfix">
                            <div className="pull-left">
                                <h4 className="list-group-item-heading">{tile.bookName}</h4>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <div className="pull-left">
                                <p className="list-group-item-heading"  style={{textAlign:'left'}}>Sale Qty:{tile.bookQty}</p>
                                <p className="list-group-item-heading"  style={{textAlign:'left'}}>Sale Price:{tile.bookPrice}</p>
                                <h4 className="list-group-item-text" style={{textAlign:'left'}}>Earnings from this book:{tile.bookTotal}</h4>
                            </div>


                            <div className="row">



                            </div>





                        </div>
                        <br/>
                    </div>
                ))}
                <h2> Total Earnings:{this.state.earnings}</h2>
            </div>
            </div>
        );
    }
}
export default ArtistEarnings;