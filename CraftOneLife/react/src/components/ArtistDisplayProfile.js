import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import * as API from '../api/API';
import Avatar from 'react-avatar';

class ArtistDisplayProfile extends Component {

    state = {
        profile_pic:'',
        fname : '',
        lname : '',
        contact_no : '',
        email: '',
        about_me: '',
    };

    componentWillMount(){
        API.fetchUserProfile({}).then((response) => {
            //alert("fetch profile response" + JSON.stringify(response.data))
            this.setState({
                profile_pic:response.data.profile_pic,
                fname:response.data.fname,
                lname:response.data.lname,
                contact_no:response.data.contact_no,
                email: response.data.email,
                about_me: response.data.about_me
            })
            //alert("current state "+JSON.stringify(this.state.profile_pic));
        });

    };



    render(){
        return(
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12">
                    <h3 style={{color:'green'}}><u>My Profile</u></h3>
                    <hr/>
                    <br/>
                </div>
                <div className="col-sm-3 col-md-3">
                    <div>
                        <Avatar src={"data:image/jpeg;base64,"+this.state.profile_pic} round={true} size={150} alt={this.state.profile_pic}/>
                    </div>
                    <br/>

                </div>
                <div className="col-sm-2 col-md-2">
                </div>

            <div className="col-sm-7 col-md-7">
                <div className="form-group">
                    <hr/>
                </div>
                <form>

                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>First Name : </p></div>
                        <div className="col-sm-8 col-md-8">

                            <div className="input-field">

                        <input className="form-control"
                               placeholder="First Name"
                               type="text"
                               disabled={true}
                               value={this.state.fname}
                               onChange={(event)=>{
                                   this.setState({
                                       fname:event.target.value
                                   });
                               }}
                               required
                               autoFocus
                        />
                    </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>Last Name : </p></div>
                        <div className="col-sm-8 col-md-8">

                            <div className="input-field">
                        <input className="form-control"
                               placeholder="Last Name"
                               type="text"
                               disabled={true}
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

                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>Email : </p></div>
                        <div className="col-sm-8 col-md-8">

                            <div className="input-field">
                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Email"
                               type="text"
                               disabled={true}
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
                    </div>
                    <br/>

                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>Phone Number : </p></div>
                        <div className="col-sm-8 col-md-8">

                            <div className="input-field">
                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Phone number"
                               type="text"
                               disabled={true}
                               value={this.state.contact_no}
                               onChange={(event)=>{
                                   this.setState({
                                       contact_no:event.target.value
                                   });
                               }}
                               required
                        />
                    </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>About Me : </p></div>
                        <div className="col-sm-8 col-md-8">



                    <div className="input-field">
                        <input className="form-control"
                               style={{height:150, textAlign:'top'}}
                               placeholder="Give your brief description"
                               type="text"
                               disabled={true}
                               value={this.state.about_me}
                               onChange={(event)=>{
                                   this.setState({
                                       about_me:event.target.value
                                   });
                               }}
                               required

                        />
                    </div>
                        </div>
                    </div>
                    <br/>
                    {/*<div className="row">
                        <div className="col-sm-4 col-md-4"><p>Profile Pic : </p></div>
                        <div className="col-sm-8 col-md-8">
                    <div className="input-field">
                        <input
                            className={'fileupload'}
                            type="file"
                            ref="mypic"
                            name="mypic"
                        />

                    </div>
                        </div>
                    </div>*/}


                    <br/>

                   {/* <div className="input-field">
                        <button className="btn btn-success" onClick={() => this.saveUserProfile(this.state)}>Update
                        </button>
                    </div>*/}
                </form>
            </div>
            </div>

        );
}
}

export default withRouter(ArtistDisplayProfile);