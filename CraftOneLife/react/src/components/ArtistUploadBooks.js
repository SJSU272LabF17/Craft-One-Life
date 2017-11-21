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
        var rootdir = './uploads'
        this.setState({
            rootdir: rootdir,
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount() {
        //document.title = `Welcome, ${this.state.username} !!`;
    }
    handleBookUpload = () => {
        alert("in handlebook upload");
        let u_path="";
        u_path = (this.state.rootdir);
        const payload = new FormData();
        //var data ={'myfile':event.target.files[0], 'path':this.state.rootdir}
        payload.append('myfile', this.refs.mypic.files[0]);
        console.log("root dir in this page ", this.state.rootdir);
        payload.append('path',u_path);
        console.log("payload path ",payload.get('path'));
        payload.append('title',this.state.book_name);
        payload.append('desc',this.state.book_desc);
        payload.append('price',this.state.book_price);
        API.uploadBook(payload)
            .then((status) => {
                if (status.status === '201') {
                    console.log("I am here ",status.status)
                }
            });

    };

    render() {
        return (
            <div className="col-sm-7 col-md-7">
                <form>
                    <div className="form-group">
                        <hr/>
                    </div>
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
                    <br/>
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
                    <br/>

                    <br/>
                    <div className="input-field">
                        <input className="form-control"
                                   placeholder="Note expected price of the book"
                                   type="text"
                                   value={this.state.overview}
                                   onChange={(event) => {
                                       this.setState({
                                           book_price: event.target.value
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
                            <button className="btn btn-success" onClick={() => this.handleBookUpload()}>Upload Book
                            </button>
            </div>
                </form>
            </div>
        );
    }
}

export default ArtistUploadBooks;