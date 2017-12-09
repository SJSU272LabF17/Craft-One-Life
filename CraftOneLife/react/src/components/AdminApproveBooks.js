import React, {Component} from 'react';
import '../css/style.css';
import '../css/bootstrap.css';
import * as API from '../api/API'


class AdminApproveBooks extends Component {


    state = {
        Books: []
    };

    componentWillMount() {
        API.getBooksForApproval().then((res) => {
            alert(res.resarray);
            if (typeof res.resarray == "undefined") {
                res.resarray = [];
                this.setState({Books: res.resarray});
            }
            else {
                this.setState({Books: res.resarray});
            }
        });
    }

    addApprovedBooks(u) {

        alert(u);
        var data = {u: u};
        API.approveBooks(data).then((res) => {
            alert("Book approved successfully");
            API.getBooksForApproval().then((res) => {
                alert(res.resarray);
                if (typeof res.resarray == "undefined") {
                    res.resarray = [];
                    this.setState({Books: res.resarray});
                }
                else {
                    this.setState({Books: res.resarray});
                }
            });
        });
    }

    rejectBooks(u) {

        alert(u);
        var data = {u: u};
        API.rejectBooks(data).then((res) => {
            alert("Book rejected successfully");
            API.getBooksForApproval().then((res) => {
                alert(res.resarray);
                if (typeof res.resarray == "undefined") {
                    res.resarray = [];
                    this.setState({Books: res.resarray});
                }
                else {
                    this.setState({Books: res.resarray});
                }
            });
        });
    }

    render() {
        return (
            <div className="col-sm-8 col-md-8">
                <br/>

                <h3 style={{color: 'green'}}><u>Books to be approved</u></h3>
                <hr/>
                <br/>
                {this.state.Books.map((u, index) => (
                    <div>


                        <div className="list-group-item clearfix">
                            <div className="pull-left">
                                <h3> NAME :</h3> <a className="list-group-item-heading"
                                                    href={'http://localhost:3001/uploads/' + u.book_path.split("/")[3]}>{u.book_name}</a>

                            </div>

                            <div className="pull-right">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <button className="btn btn-success" onClick={() => this.addApprovedBooks(u)}>
                                            APPROVE
                                        </button>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={() => this.rejectBooks(u)}> REJECT
                                        </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        );
    }
}

export default AdminApproveBooks;