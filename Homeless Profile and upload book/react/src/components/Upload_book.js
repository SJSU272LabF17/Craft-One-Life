import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import * as API from '../api/API';

class Upload_book extends Component {

    state = {
        book_name : '',
        book_price : 0,
        book_desc : '',
        rootdir:'',
        userid:''
    };

    componentWillMount(){
        var rootdir = './uploads'
        this.setState({
            rootdir:rootdir,
        });
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    componentDidMount(){
        //document.title = `Welcome, ${this.state.username} !!`;
    }

    handleBookUpload = () => {
        let u_path="";
        u_path = (this.state.rootdir);
        const payload = new FormData();
        //var data ={'myfile':event.target.files[0], 'path':this.state.rootdir}
        payload.append('myfile', this.refs.mypic.files[0]);
        console.log("root dir in this page ", this.state.rootdir)
        payload.append('path',u_path);
        console.log("payload path ",payload.get('path'))
        payload.append('title',this.state.book_name)
        payload.append('desc',this.state.book_desc)
        payload.append('price',this.state.book_price)
        API.uploadBook(payload)
            .then((status) => {
                if (status.status === '201') {
                    console.log("I am here ",status.status)
                }
            });

    };


    render(){
        return(

        <div>
            <table>

                <tr>

                    <td>
                        Book name </td><td> <input className={`form-group `}
                                                    placeholder="Name of the book"
                                                    type="text"
                                                    value={this.state.book_name}
                                                    onChange={(event)=>{
                                                        this.setState({
                                                            book_name:event.target.value
                                                        });
                                                    }}
                                                    required

                />
                </td>
                </tr><tr>

                <td>
                       Book descripton </td><td> <input className={`form-group `}
                                               placeholder="Describr your book"
                                               type="text"
                                                        width={200}
                                               value={this.state.book_desc}
                                               onChange={(event)=>{
                                                   this.setState({
                                                       book_desc:event.target.value
                                                   });
                                               }}
                                               required

            />
            </td>
            </tr>



                <tr>

                    <td>
                        Expected Price </td><td> <input className={`form-group `}
                                                  placeholder="Note expected price of the book"
                                                  type="text"
                                                  value={this.state.overview}
                                                  onChange={(event)=>{
                                                      this.setState({
                                                          book_price:event.target.value
                                                      });
                                                  }}
                                                  required

                />
                </td>
                </tr>


                <tr>
                    <td></td>
                    <td>

                            <input
                                className={'fileupload'}
                                type="file"
                                ref="mypic"
                                name="mypic"
                            />
                            <button className="btn btn-primary" onClick={() => this.handleBookUpload()}>Upload Book</button>


                    </td>


                </tr>


               </table>

        </div>

        )
    }
}

export default withRouter(Upload_book);