import React, {Component, PropTypes} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import * as API from '../api/API';

class AfterHeader extends Component {
    handleLogout = () => {
<<<<<<< HEAD
       
=======
        alert('logout called');
>>>>>>> 42dd93887df5a9371b034c0e9b68dc917c69d630
        API.doLogout()
            .then((status) => {
                if(status === 201){
                    this.setState({
                        isLoggedIn: false
                    });
                    localStorage.removeItem('user_id');
                    localStorage.removeItem('isLoggedIn');
                    window.location.replace("/");
                }
            });
    };

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
                                <li><Link to="/bookadventure">Books</Link></li>

                                <li><Link to="/aboutus">About Us</Link></li>
<<<<<<< HEAD
                                {/*<li><Link to="/contactus">Contact Us</Link></li>*/}
=======
                                <li><Link to="/contactus">Contact Us</Link></li>
>>>>>>> 42dd93887df5a9371b034c0e9b68dc917c69d630
                                <li><Link to='/usercart'>Cart</Link></li>
                                <li><Link to='/myorders'>My Orders</Link></li>
                                <li><a onClick={()=>this.handleLogout()}>Logout</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(AfterHeader);