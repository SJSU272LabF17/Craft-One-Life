import React, {Component, PropTypes} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import * as API from '../api/API';

var padding = {padding:0}

var approved_books=[]
var rejected_books=[]
var pending_books=[]

class MyBooks extends Component{

    state = {
        my_books:[],
        ab:[],
        rb:[],
        pb:[],
        message:''
    };

    componentWillMount(){
        approved_books=[]
        rejected_books=[]
        pending_books=[]
        var user_id=localStorage.getItem("user_id");
        var payload={user_id:user_id};
        //alert("in payload" + JSON.stringify(payload));
        API.getMyBooks(payload)
            .then((res) => {
                //alert("back in my books : " + JSON.stringify(res.data));
                if (res.status === 201 && res.data[0]) {
                    //alert("Books fetched");
                    console.log("got the data",res.data[0].isApproved)
                    for(var i=0;i<res.data.length;i++){
                        if(res.data[i].isApproved==="1")
                        {approved_books.push(res.data[i])}
                        else if(res.data[i].isApproved==="0")
                        {pending_books.push(res.data[i])}
                        else if(res.data[i].isApproved==="2")
                        {rejected_books.push(res.data[i])}
                    }

                    this.setState(
                        {
                            ab:approved_books,
                            pb:pending_books,
                            rb:rejected_books
                        }
                    )

                    console.log("state here is ",this.state)

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
                        <h3 style={{color:"green"}}>Approved Books</h3>
                        <hr/>
                        <br/>
                        <table id="tableMenu" className="table">
                            <tbody>
                            <tr>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Book</th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Quoted Price</th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Description</th>
                            </tr>



                            {this.state.ab.map(u =>

                                <tr>
                                    <td style={{padding: 0, textAlign: 'left'}}><a
                                        className="list-group-item-heading"
                                        href={'http://localhost:3001/uploads/' + u.book_path.split("/")[3]}>{u.book_name}</a>
                                    </td>
                                    <td style={{padding:0, textAlign: 'left'}}>{u.user_price}</td>
                                    <td style={{padding:0, textAlign: 'left'}}>{u.book_desc}</td>

                                </tr>

                            )}

                            </tbody>
                        </table>
                    </div>


                    <div className="col-md-12 ">
                        <br/>
                        <h3 style={{color:"green"}}>Rejected Books</h3>
                        <hr/>
                        <br/>
                        <table id="tableMenu" className="table">
                            <tbody>
                            <tr>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Book</th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Quoted Price</th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Description</th>
                            </tr>



                            {this.state.rb.map(u =>

                                <tr>
                                    <td style={{padding: 0, textAlign: 'left'}}><a
                                        className="list-group-item-heading"
                                        href={'http://localhost:3001/uploads/' + u.book_path.split("/")[3]}>{u.book_name}</a>
                                    </td>
                                    <td style={{padding:0, textAlign: 'left'}}>{u.user_price}</td>
                                    <td style={{padding:0, textAlign: 'left'}}>{u.book_desc}</td>

                                </tr>

                            )}

                            </tbody>
                        </table>
                    </div>


                    <div className="col-md-12 ">
                        <br/>
                        <h3 style={{color:"green"}}>Pending Books</h3>
                        <hr/>
                        <br/>
                        <table id="tableMenu" className="table">
                            <tbody>
                            <tr>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Book</th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Quoted Price</th>
                                <th style={{color:"green", padding:0, textAlign: 'left'}}>Description</th>
                            </tr>



                            {this.state.pb.map(u =>

                                <tr>
                                    <td style={{padding: 0, textAlign: 'left'}}><a
                                        className="list-group-item-heading"
                                        href={'http://localhost:3001/uploads/' + u.book_path.split("/")[3]}>{u.book_name}</a>
                                    </td>
                                    <td style={{padding:0, textAlign: 'left'}}>{u.user_price}</td>
                                    <td style={{padding:0, textAlign: 'left'}}>{u.book_desc}</td>

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
export default withRouter(MyBooks);