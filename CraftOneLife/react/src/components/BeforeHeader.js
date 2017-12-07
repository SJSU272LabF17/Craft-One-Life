import React, {Component, PropTypes} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import * as API from '../api/API';

class BeforeHeader extends Component {
    render() {
        return (
            <header id="fh5co-header-section" className="sticky-banner">
                <div className="container">
                    <div className="nav-header">
                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                        <nav id="fh5co-menu-wrap" role="navigation">
                            <ul className="sf-menu" id="fh5co-primary-menu">
                                <li className="active"><a href="/">Home</a></li>
                               {/* <li>
                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                    <ul className="fh5co-sub-menu">
                                        <li><Link to="/bookadventure">Adventure</Link></li>
                                        <li><Link to="/bookdetails">Mystery</Link></li>
                                        <li><a href="#">Kids</a></li>
                                        <li><a href="#">Comedy</a></li>
                                        <li><a href="#">Romance</a></li>
                                    </ul>
                                </li>*/}
                                <li><Link to="/aboutus">About Us</Link></li>
                                <li><Link to="/contactus">Contact Us</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                                <li><Link to='/signup'>Signup</Link></li>
                                {/*<li><Link to='/usercart'>Cart</Link></li>*/}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(BeforeHeader);