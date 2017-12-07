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

                <div className="col-sm-7 col-md-7">
                    <form onSubmit={this.props.handleSignUp(this.state)}>
                        <div className="form-group">
                            <hr/>
                        </div>
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
                        <br/>
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
                        <br/>
                        <div className="input-field">

                        </div>
                        <br/>
                        <div className="input-field">
                            <button
                                className="btn btn-success"
                                type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
        );
    }
}

export default Signup;