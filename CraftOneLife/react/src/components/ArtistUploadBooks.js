import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import * as API from '../api/API';

class ArtistUploadBooks extends Component {

    state = {
        book_name: '',
        book_price: 0,
        book_desc: '',
        rootdir: '',
        userid: ''
    };

    componentWillMount() {
        var rootdir = './public/uploads'
        this.setState({
            rootdir: rootdir,
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount() {
        //document.title = `Welcome, ${this.state.username} !!`;
    }
    handleBookUpload = () => {
        if (this.state.book_name === "" || this.state.book_desc === "" || this.state.book_price === "" || this.state.rootdir === "") {
            //alert("Please insert all the fields")
        }
        else {
            alert("in upload book");
            let u_path = "";
            u_path = (this.state.rootdir);
            const payload = new FormData();
            //var data ={'myfile':event.target.files[0], 'path':this.state.rootdir}
            payload.append('myfile', this.refs.mypic.files[0]);
            console.log("root dir in this page ", this.state.rootdir);
            payload.append('path', u_path);
            console.log("payload path ", payload.get('path'));
            payload.append('title', this.state.book_name);
            payload.append('desc', this.state.book_desc);
            payload.append('price', this.state.book_price);
            payload.append('user',localStorage.getItem("user_id"));

           // alert("---upload books- " + JSON.stringify(payload))
            API.uploadBook(payload)
                
        }

    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-sm-12 col-md-12">
                    <h3 style={{color:'green'}}><u>Upload Books</u></h3>
                    <hr/>
                    <br/>
                </div>

                <div className="col-sm-8 col-md-8">
                    <form>
                    <div className="form-group">
                        <hr/>
                    </div>

                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>Book Name : </p></div>
                        <div className="col-sm-8 col-md-8">
                    <div className="input-field">
                        <input className="form-control"
                                   placeholder="Name of the book"
                                   type="text"
                                   required
                                   value={this.state.book_name}
                                   onChange={(event) => {
                                       this.setState({
                                           book_name: event.target.value
                                       });
                                   }}/>
                    </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>Book Description : </p></div>
                        <div className="col-sm-8 col-md-8">

                            <div className="input-field">
                        <input className="form-control"
                                   placeholder="Describe your book"
                                   type="text"
                                   width={200}
                                   value={this.state.book_desc}
                                   onChange={(event) => {
                                       this.setState({
                                           book_desc: event.target.value
                                       });
                                   }}
                                   required

                        />

                    </div>
                        </div>
                    </div>
                    <br/>

                    <br/>
                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>Book Price : </p></div>
                        <div className="col-sm-8 col-md-8">

                        <div className="input-field">
                        <input className="form-control"
                                   placeholder="Note expected price of the book"
                                   type="number"
                                   value={this.state.overview}
                                   onChange={(event) => {
                                       this.setState({
                                           book_price: event.target.value
                                       });
                                   }}
                                   required

                        />

                    </div>
                        </div>
                    </div>
                    <br/>

                    <br/>
                    <div className="row">
                        <div className="col-sm-4 col-md-4"><p>Book Uploads : </p></div>
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
                    </div>
                    <br/>

                    <br/>
                    <div className="input-field">
                            <button className="btn btn-success" onClick={this.handleBookUpload}>Upload Book
                            </button>
            </div>



            </form>
                </div>
            </div>
        );
    }
}

export default ArtistUploadBooks;