import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../css/style.css';
import '../css/bootstrap.css';
import adrian from '../images/Adrian.png';

class ArtistDetails extends Component{
    render() {
        return (
            <div className="col-sm-4 col-md-4">
                <img style={{width:270, height:250}} src={adrian}/>
            </div>
        );
    }
}
export default ArtistDetails;