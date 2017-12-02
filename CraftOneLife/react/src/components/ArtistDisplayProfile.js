import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import * as API from '../api/API';

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

            <div className="col-sm-7 col-md-7">
                <form>
                    <div className="form-group">
                        <hr/>
                    </div>
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
                               autoFocus
                        />
                    </div>
                    <br/>
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
                    <br/>

                    <br/>
                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Email no"
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
                    <br/>

                    <br/>

                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Phone number"
                               type="text"
                               value={this.state.contact_no}
                               onChange={(event)=>{
                                   this.setState({
                                       contact_no:event.target.value
                                   });
                               }}
                               required
                        />
                    </div>
                    <br/>

                    <br/>

                    <div className="input-field">
                        <input className="form-control"
                               placeholder="Give your brief description"
                               type="text"
                               value={this.state.about_me}
                               onChange={(event)=>{
                                   this.setState({
                                       about_me:event.target.value
                                   });
                               }}
                               required

                        />
                    </div>
                    <br/>

                    <br/>
                    <div className="input-field">
                        <input
                            className={'fileupload'}
                            type="file"
                            ref="mypic"
                            name="mypic"
                        />

                    </div>

                    <div><p>My profile</p>
                        <img src={"data:image/jpeg;base64,"+this.state.profile_pic} height={100} width={200} alt={this.state.profile_pic}/></div>
                    <br/>

                    <br/>

                    <div className="input-field">
                        <button className="btn btn-success" onClick={() => this.saveUserProfile(this.state)}>Update
                        </button>
                    </div>
                </form>
            </div>

        );
}
}

export default withRouter(ArtistDisplayProfile);