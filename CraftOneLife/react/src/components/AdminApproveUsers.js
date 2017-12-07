import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import '../css/bootstrap.css';

import * as API from '../api/API'
import adrian from '../images/Adrian.png';

class AdminApproveUsers extends Component{

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        users:[]
    };

    componentWillMount(){
        API.getusersforapproval().then((res) => {
            alert(res.resarray);
            if(typeof res.resarray=="undefined"){
                res.resarray=[];
                this.setState({users:res.resarray});
            }
            else{
            this.setState({users:res.resarray});}
        });
    }

    addApprovedUser(u)
    {
        var data={email:u.email};

        API.approveuser(data).then((res) => {

            //alert("User approved successfully");
            API.getusersforapproval().then((res) => {
                alert(res.resarray);
                if(typeof res.resarray=="undefined"){
                    res.resarray=[];
                }
                this.setState({users:res.resarray});
            });
        });
    }

    constructor(props)
    {
        super(props);
        //this.addApprovedUser=this.addApprovedUser.bind();


    }

    render() {
        return (
            <div className="col-sm-4 col-md-4">
                <h1>Hi</h1>

                <h4>Users to be approved</h4>
                <h4>Approved Users</h4>
                {this.state.users.map((u,index) =>(
                    <div>


                        <div className="list-group-item clearfix" >
                            <div className="pull-left">
                                NAME :{u.email}

                            </div>

                            <div className="pull-right">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <button className="btn btn-success"  onClick={()=>this.addApprovedUser(u)}> APPROVE</button>
                                        <button className="btn btn-danger"> REJECT</button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    /*<tr className="row" key={u.book_id} >
                        <td>{u.book_name}</td>
                        <td><button onClick={()=>this.addApprovedBooks(u.book_id)} className="btn btn-primary btn-sm"> Approve</button></td>
                    </tr>*/
                ) )}
            </div>
        );
    }
}

export default AdminApproveUsers;

/*import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as API from '../api/API'

class Login extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {
        username: '',
        password: '',
        users:[]
    };

    componentWillMount(){
        API.getusersforapproval().then((res) => {
            this.setState({users:res});
        });
    }

    addApprovedUser(u)
    {

        API.approveuser(u.email).then((res) => {

            alert("User approved successfully");
        });
    }

    constructor(props)
    {
        super(props);
        //this.addApprovedUser=this.addApprovedUser.bind();


    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-3">

                    <div className="form-group">
                        <h1>Approve users</h1>
                    </div>

                    <tbody>
                    {this.state.users.map((u,index) =>
                        <tr className="row" key={u.email} >
                            <td>{u.email}</td>
                            <td><button onClick={()=>this.addApprovedUser(u)} className="btn btn-primary btn-sm"> Approve</button></td>
                        </tr>
                    )}
                    </tbody>


                </div>
            </div>
        );
    }
}

export default Login;*/
