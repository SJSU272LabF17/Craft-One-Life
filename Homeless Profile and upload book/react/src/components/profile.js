import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import * as API from '../api/API';

class Homeless_Profile extends  Component{

    state = {
        fname : '',
        lname : '',
        email:'',
        contact_no:'',
        about_me:''
    };

    componentWillMount(){
  /*      API.fetchUserProfile({}).then((response) => {
            console.log("fetch profile response", response)
            this.setState({
                fname:response.data[0].fname,
                lname:response.data[0].lname,
                overview:response.data[0].overview,
                work: response.data[0].work,
                highschool: response.data[0].highschool,
                bachelors:response.data[0].bachelors,
                masters:response.data[0].masters,
                otheredu:response.data[0].otheredu,
                mobile:response.data[0].mobile,
                lifeevent:response.data[0].lifeevent,
                music:response.data[0].music,
                show:response.data[0].show,
                sports:response.data[0].sports

            })
            console.log("current state ",this.state)
        });
*/
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
        var tablestyle={textAlign:'left'};

        return(
            <div>
                <div >
                    <Panel className="profile-panel" style={tablestyle}>
                        <form  >
                            <fieldset>
                                <table>

                                    <tr>

                                        <td>
                                            First Name </td><td> <input className={`form-group `}
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
                                    </td>
                                    </tr>
                                    <tr>

                                    <td>
                                        Last Name </td><td> <input className={`form-group `}
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
                                </td>
                                </tr>


                                    <tr>

                                        <td>
                                            Email </td><td> <input className={`form-group `}
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
                                    </td>
                                    </tr>

                                    <tr>

                                        <td>
                                            Phone Number </td><td> <input className={`form-group `}
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
                                    </td>
                                    </tr>



                                    <tr>

                                        <td>
                                            About Me </td><td> <input className={`form-group `}
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
                                    </td>
                                    </tr>


                                    <tr>
                                        <td> Profile Picture </td>
                                        <td>

                                            <input
                                                className={'fileupload'}
                                                type="file"
                                                ref="mypic"
                                                name="mypic"
                                            />

                                        </td>


                                    </tr>


                                </table>

                                <Button  onClick={() => this.saveUserProfile(this.state)} bsSize="sm" bsStyle="success" block>Update</Button>

                            </fieldset>
                        </form>

                    </Panel>

                </div>

            </div>
        )
    }
}

export default Homeless_Profile;