import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import '../css/bootstrap.css';
import adrian from '../images/Adrian.png';

class ArtistDetails extends Component{

    constructor(props)
    {
        super(props);
        console.log("in constr"+ JSON.stringify(props));
    }
    render() {
        return (
            <div className="col-sm-4 col-md-4">
                <h1>Hi</h1>
                <h1>{this.props.params.name}</h1>
            </div>
        );
    }
}
export default ArtistDetails;