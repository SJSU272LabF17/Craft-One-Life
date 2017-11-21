import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import * as API from '../api/API';

class ArtistProfilePage extends Component{

    state = {
        fname : '',
        lname : '',
        email:'',
        contact_no:'',
        about_me:''
    };

    componentWillMount(){

    };
    saveUserProfile = (userdata) => {
        console.log("I am going to save profile")
        API.saveUserProfile(userdata)
            .then((status) => {
                console.log("response after saving profile ",status)
                if (status.status === '201') {
                    console.log("User Profile Updated.")
                    alert("Your Profile has been updated.")
                } else if (status === 401) {
                    console.log("Error in user profile update")
                }
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
export default ArtistProfilePage;