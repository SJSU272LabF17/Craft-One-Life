import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';


class Signup extends Component {

    static propTypes = {
        handleSignUp: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: ''
    };

    componentWillMount(){
        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12">
                    <h2 style={{color:'green'}}><u>Signup</u></h2>
                    <hr/>
                    <br/>
                </div>
                <div className="col-sm-7 col-md-7">

                    <form>
                        <div className="form-group">
                            <hr/>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 col-md-4"><p>UserName : </p></div>
                            <div className="col-sm-8 col-md-8">

                        <div className="input-field">
                            <input
                                className="form-control"
                                type="text"
                                label="Username"
                                placeholder="Username"
                                required
                                value={this.state.username}
                                onChange={(event) => {
                                    this.setState({
                                        username: event.target.value
                                    });
                                }}
                            />
                        </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-sm-4 col-md-4"><p>Password : </p></div>
                            <div className="col-sm-8 col-md-8">
                        <div className="input-field">
                            <input
                                className="form-control"
                                type="password"
                                label="password"
                                placeholder="Password"
                                required
                                value={this.state.password}
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value
                                    });
                                }}
                            />
                        </div>
                            </div>
                        </div>
                        <br/>


                        <br/>
                        <div className="input-field">
                            <button
                                className="btn btn-success"
                                type="button"
                                onClick={() => this.props.handleSignUp(this.state)}>

                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;