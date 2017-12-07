import React, {Component} from 'react';
import * as API from '../api/API';
import ImageGridList from "./ImageGridList";

class BookDetails extends Component{

    state={

    }


    componentDidMount() {

    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-8">

           <h1>Hi</h1>
                    {this.props.details.bookName}

            </div>
            </div>
        );
    }
}
export default BookDetails;