import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API';

class ContactUs extends Component{
    state = {
        fname : '',
        lname : '',
        email:'',
        password:''
    };


    handleContactUs = (userdata) => {
        if(this.state.fname==="" || this.state.lname==="" || this.state.email==="" || this.state.password==="" ) {
            alert("Please add all the fields");
        }

        else {
            alert("in react request" + JSON.stringify(userdata));
            API.handleContactUs(userdata)
                .then((res) => {
                    alert("back in react response : " + JSON.stringify(res));
                    if (res.status === '201') {
                        this.setState({
                            message: "Data Added successfully",
                        });

                    }
                    else if (res.status === '401') {
                        this.setState({
                            message: JSON.stringify(res.errors)
                        });

                    }
                    else{
                        this.setState({
                            message: "Data couldn't be added. Try Adding details Again!"
                        });
                    }

                })
        }
    };

    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <br/>
                    <h1> CONTACT US</h1><br/>

                    <p><i>To contact us, please fill out the form below or give us a call at <b>(1-669-231-9566)</b>.</i></p>
                    <hr/>
                    <br/>
                    <br/>
                    <div className="row justify-content-md-center">

                        <div className="col-sm-4 col-md-4"><p>First Name : </p></div>
                        <div className="col-md-5">
                        <div className="input-field">
                            <input className="form-control"
                                   placeholder="First Name"
                                   type="text"
                                   value={this.state.fname}
                                   onChange={(event)=>{
                                       this.setState({
                                           fname:event.target.value
                                       });
                                   }}
                                   required
                            />
                        </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4 col-md-4"><p>Last Name : </p></div>
                        <div className="col-md-5">
                        <div className="input-field">
                            <input className="form-control"
                                   placeholder="Last Name"
                                   type="text"
                                   value={this.state.lname}
                                   onChange={(event)=>{
                                       this.setState({
                                           lname:event.target.value
                                       });
                                   }}
                                   required
                            />
                        </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4 col-md-4"><p>Email : </p></div>
                        <div className="col-md-5">
                        <div className="input-field">
                            <input className="form-control"
                                   placeholder="Email"
                                   type="text"
                                   value={this.state.email}
                                   onChange={(event)=>{
                                       this.setState({
                                           email:event.target.value
                                       });
                                   }}
                                   required
                            />
                        </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row justify-content-md-center">
                        <div className="col-sm-4 col-md-4"><p>Password : </p></div>
                        <div className="col-md-5">
                            <div className="input-field">
                                <input className="form-control"
                                       placeholder="password"
                                       type="password"
                                       value={this.state.password}
                                       onChange={(event)=>{
                                           this.setState({
                                               password:event.target.value
                                           });
                                       }}
                                       required
                                />
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="input-field">
                        <button
                            className="btn btn-success"
                            type="submit"
                            onClick={() => this.handleContactUs(this.state)}>
                            Submit
                        </button>
                    </div>
                    </div>
                </div>

        );
    }
}
export default ContactUs;