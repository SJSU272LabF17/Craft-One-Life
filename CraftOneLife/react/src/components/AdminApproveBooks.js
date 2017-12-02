import React, {Component} from 'react';
import '../css/style.css';
import '../css/bootstrap.css';
import * as API from '../api/API'


class AdminApproveBooks extends Component{


    state={
        Books:[]
    };

    componentWillMount(){
        API.getBooksForApproval().then((res) => {
            alert(JSON.stringify(res.resarray));
            this.setState({Books:res.resarray});
        });
    }

    addApprovedBooks(id)
    {

        alert(id);
        var data={id:id};
        API.approveBooks(data).then((res) => {
            alert("Book approved successfully");
        });
    }

    render() {
        return (
            <div className="col-sm-4 col-md-4">
                <h1>Hi</h1>

                <h4>Books to be approved</h4>
                <h4>Approved Books</h4>
                {this.state.Books.map((u,index) =>(
                    <div>


                    <div className="list-group-item clearfix" >
                        <div className="pull-left">
                            NAME : <a className="list-group-item-heading" href={'http://localhost:3001/uploads/'+u.book_name}>{u.book_name}</a>

                        </div>

                        <div className="pull-right">
                            <div className="row">
                                <div className="col-xs-12">
                                    <button className="btn btn-success"  onClick={()=>this.addApprovedBooks(u.book_id)}> APPROVE</button>
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
export default AdminApproveBooks;