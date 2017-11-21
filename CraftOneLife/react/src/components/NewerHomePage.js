import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import * as API from '../api/API';
import {DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu';
import Login from "./Login";
import Message from "./Message";
import Welcome from "./Welcome";
//import '../css/style.css';
//import '../css/bootstrap.css';
import Signup from "./Signup";
import Artists from "./Artists";
import ArtistDetails from './ArtistDetails';
import ArtistWelcomePage from './ArtistWelcomePage';
import ArtistUploadBooks from './ArtistUploadBooks';
import ArtistProfilePage from './ArtistProfilePage';

import {Modal} from 'react-bootstrap';
import DemoCarousel from './DemoCarousel';
import clients from '../images/clients.png';
import whatWeOffer from '../images/whatWeOffer.png';
import clientTestimonials from '../images/clientTestimonials.png';
import footerClients from '../images/footerClients.png';

class NewerHomePage extends Component {

    state = {
        isLoggedIn: false,
        message: '',
        username: '',
        showLoginModal: false,
        showSignupModal: false
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((res) => {
                alert("back in newer homepage : " + JSON.stringify(res));
                if (res.status === '201') {
                    this.setState({
                        isLoggedIn: true,
                        message: "Welcome to my App..!!",
                        //username: userdata.username
                    });
                    this.props.history.push("/artistwelcomepage");
                } else if (res.status === '401') {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };
    handleSignUp = (userdata) => {
        //alert("in signup");
        API.doSignup(userdata)
            .then((res) => {
                //alert("back in handle signup response : " + JSON.stringify(res));
                if (res.status === '201') {
                    this.setState({
                        message: ""
                    });
                    this.props.history.push("/login");
                }
                else if (res.status === '401') {
                    this.setState({
                        message: JSON.stringify(res.errors)
                    });
                    console.log(this.state.message);

                }

            })
    };

    close = (data) => {

        if (data === 'login') {
            //alert("in login of close");
            this.setState({showLoginModal: false});
        }
        else if (data === 'signup') {
            //alert("in signup of close");
            this.setState({showSignupModal: false});
        }
    };
    open = (data) => {
        if (data === 'login') {
            alert("in login of open");
            this.setState({showLoginModal: true});
        }
        else if (data === 'signup') {
            alert("in signup of open");
            this.setState({showSignupModal: true});
        }
    };

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (

                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li>
                                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                                    <ul className="fh5co-sub-menu">
                                                        <li><a href="#">Adventure</a></li>
                                                        <li><a href="#">Mystery &amp; HTML5</a></li>
                                                        <li><a href="#">Kids</a></li>
                                                        <li><a href="#">Comedy</a></li>
                                                        <li><a href="#">Romance</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Clients</a></li>
                                                <li><Link to="/artists">Artists</Link></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to='/login'>Login</Link></li>
                                                <li><Link to='/signup'>Signup</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="fh5co-overlay"/>
                                <div className="fh5co-cover" data-stellar-background-ratio="0.5">
                                    <DemoCarousel/>

                                    <img style={{width: 1450, height: 120}} src={clients}/>

                                    <div className="container">
                                        <div className="row justify-content-md-center">
                                            <div className="col-sm-12 col-md-12">
                                                <h3>MAKING INVISIBLE TALENT VISIBLE</h3>
                                                <p>We help small businesses and Fortune 500 companies uplift their
                                                    offices while supporting their communities.</p>
                                                <button
                                                    className="btn btn-success"
                                                    type="button">
                                                    Contact Us
                                                </button>
                                                &nbsp; &nbsp;
                                                <button
                                                    className="btn btn-success"
                                                    type="button">
                                                    Browse Art
                                                </button>
                                                &nbsp; &nbsp;
                                                <button
                                                    className="btn btn-success"
                                                    type="button">
                                                    View Catalogue
                                                </button>
                                                <br/>
                                                <h1>Here's What We Offer</h1>
                                                <img style={{width: 900, height: 550}} src={whatWeOffer}/>
                                                <hr/>
                                                <h1>Here's What We Offer</h1>
                                                <img style={{width: 1000, height: 800}} src={clientTestimonials}/>
                                            </div>
                                            <img style={{width: 1450, height: 200}} src={footerClients}/>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div id="footer">
                                    <div className="container">
                                        <div className="row row-bottom-padded-md">
                                            <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                <h3>CRAFTONELIFE</h3>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Shop</h3>
                                                <ul>
                                                    <li><a href="#">By Genre</a></li>
                                                    <li><a href="#">By Taste</a></li>
                                                    <li><a href="#">By Price</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Company</h3>
                                                <ul>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Locations</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Customer Care</h3>
                                                <ul>
                                                    <li><a href="#">Refunds/Returns</a></li>
                                                    <li><a href="#">Shipping Policy</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 text-center">
                                                <p className="fh5co-social-icons">
                                                    <a href="#"><i className="icon-twitter2"/></a>
                                                    <a href="#"><i className="icon-facebook2"/></a>
                                                    <a href="#"><i className="icon-instagram"/></a>
                                                    <a href="#"><i className="icon-dribbble2"/></a>
                                                    <a href="#"><i className="icon-youtube"/></a>
                                                </p>
                                                <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                    className="icon-heart3"/> by Rajvi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>

                )}/>

                 <Route exact path="/artistwelcomepage" render={() => (

                     <div id="fh5co-wrapper">
                         <div id="fh5co-page">
                             <header id="fh5co-header-section" className="sticky-banner">
                                 <div className="container">
                                     <div className="nav-header">
                                         <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                         <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                         <nav id="fh5co-menu-wrap" role="navigation">
                                             <ul className="sf-menu" id="fh5co-primary-menu">
                                                 <li className="active"><a href="/">Home</a></li>
                                                 <li>
                                                     <a href="#" className="fh5co-sub-ddown">Books</a>
                                                     <ul className="fh5co-sub-menu">
                                                         <li><a href="#">Adventure</a></li>
                                                         <li><a href="#">Mystery &amp; HTML5</a></li>
                                                         <li><a href="#">Kids</a></li>
                                                         <li><a href="#">Comedy</a></li>
                                                         <li><a href="#">Romance</a></li>
                                                     </ul>
                                                 </li>
                                                 <li><Link to='/artistprofilepage'>MyProfile</Link></li>
                                                 <li><Link to="#">Artists</Link></li>
                                                 <li><a href="#">About Us</a></li>
                                                 <li><a href="#">Contact Us</a></li>
                                                 <li><Link to='/artistuploadbooks'>Upload Books</Link></li>
                                                 <li><Link to='#'>Logout</Link></li>
                                             </ul>
                                         </nav>
                                     </div>
                                 </div>
                             </header>
                             <div className="fh5co-hero">
                                 <div className="container">
                                     <div className="row justify-content-md-center">
                                        <ArtistWelcomePage/>
                                     </div>
                                 </div>
                             </div>
                             <footer>
                                 <div id="footer">
                                     <div className="container">
                                         <div className="row row-bottom-padded-md">
                                             <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                 <h3>CRAFTONELIFE</h3>
                                                 <p>Far far away, behind the word mountains, far from the countries
                                                     Vokalia and
                                                     Consonantia, there live the blind texts.</p>
                                             </div>
                                             <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                 <h3>Shop</h3>
                                                 <ul>
                                                     <li><a href="#">By Genre</a></li>
                                                     <li><a href="#">By Taste</a></li>
                                                     <li><a href="#">By Price</a></li>
                                                 </ul>
                                             </div>
                                             <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                 <h3>Company</h3>
                                                 <ul>
                                                     <li><a href="#">About</a></li>
                                                     <li><a href="#">Team</a></li>
                                                     <li><a href="#">Locations</a></li>
                                                     <li><a href="#">Blog</a></li>
                                                     <li><a href="#">Press</a></li>
                                                 </ul>
                                             </div>
                                             <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                 <h3>Customer Care</h3>
                                                 <ul>
                                                     <li><a href="#">Refunds/Returns</a></li>
                                                     <li><a href="#">Shipping Policy</a></li>
                                                     <li><a href="#">FAQ</a></li>
                                                     <li><a href="#">Contact Us</a></li>
                                                 </ul>
                                             </div>
                                         </div>
                                         <div className="row">
                                             <div className="col-md-6 col-md-offset-3 text-center">
                                                 <p className="fh5co-social-icons">
                                                     <a href="#"><i className="icon-twitter2"/></a>
                                                     <a href="#"><i className="icon-facebook2"/></a>
                                                     <a href="#"><i className="icon-instagram"/></a>
                                                     <a href="#"><i className="icon-dribbble2"/></a>
                                                     <a href="#"><i className="icon-youtube"/></a>
                                                 </p>
                                                 <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                     className="icon-heart3"/> by Rajvi</p>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </footer>

                         </div>
                     </div>

                    )}/>

                <Route exact path="/artistprofilepage" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li>
                                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                                    <ul className="fh5co-sub-menu">
                                                        <li><a href="#">Adventure</a></li>
                                                        <li><a href="#">Mystery &amp; HTML5</a></li>
                                                        <li><a href="#">Kids</a></li>
                                                        <li><a href="#">Comedy</a></li>
                                                        <li><a href="#">Romance</a></li>
                                                    </ul>
                                                </li>
                                                <li><Link to='/artistprofilepage'>MyProfile</Link></li>
                                                <li><Link to="#">Artists</Link></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to='/artistuploadbooks'>Upload Books</Link></li>
                                                <li><Link to='#'>Logout</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                    <ArtistProfilePage/>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div id="footer">
                                    <div className="container">
                                        <div className="row row-bottom-padded-md">
                                            <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                <h3>CRAFTONELIFE</h3>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Shop</h3>
                                                <ul>
                                                    <li><a href="#">By Genre</a></li>
                                                    <li><a href="#">By Taste</a></li>
                                                    <li><a href="#">By Price</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Company</h3>
                                                <ul>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Locations</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Customer Care</h3>
                                                <ul>
                                                    <li><a href="#">Refunds/Returns</a></li>
                                                    <li><a href="#">Shipping Policy</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 text-center">
                                                <p className="fh5co-social-icons">
                                                    <a href="#"><i className="icon-twitter2"/></a>
                                                    <a href="#"><i className="icon-facebook2"/></a>
                                                    <a href="#"><i className="icon-instagram"/></a>
                                                    <a href="#"><i className="icon-dribbble2"/></a>
                                                    <a href="#"><i className="icon-youtube"/></a>
                                                </p>
                                                <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                    className="icon-heart3"/> by Rajvi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                    )}/>


                <Route exact path="/artistuploadbooks" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li>
                                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                                    <ul className="fh5co-sub-menu">
                                                        <li><a href="#">Adventure</a></li>
                                                        <li><a href="#">Mystery &amp; HTML5</a></li>
                                                        <li><a href="#">Kids</a></li>
                                                        <li><a href="#">Comedy</a></li>
                                                        <li><a href="#">Romance</a></li>
                                                    </ul>
                                                </li>
                                                <li><Link to='/artistprofilepage'>MyProfile</Link></li>
                                                <li><Link to="#">Artists</Link></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to='/artistuploadbooks'>Upload Books</Link></li>
                                                <li><Link to='#'>Logout</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                    <ArtistUploadBooks/>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div id="footer">
                                    <div className="container">
                                        <div className="row row-bottom-padded-md">
                                            <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                <h3>CRAFTONELIFE</h3>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Shop</h3>
                                                <ul>
                                                    <li><a href="#">By Genre</a></li>
                                                    <li><a href="#">By Taste</a></li>
                                                    <li><a href="#">By Price</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Company</h3>
                                                <ul>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Locations</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Customer Care</h3>
                                                <ul>
                                                    <li><a href="#">Refunds/Returns</a></li>
                                                    <li><a href="#">Shipping Policy</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 text-center">
                                                <p className="fh5co-social-icons">
                                                    <a href="#"><i className="icon-twitter2"/></a>
                                                    <a href="#"><i className="icon-facebook2"/></a>
                                                    <a href="#"><i className="icon-instagram"/></a>
                                                    <a href="#"><i className="icon-dribbble2"/></a>
                                                    <a href="#"><i className="icon-youtube"/></a>
                                                </p>
                                                <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                    className="icon-heart3"/> by Rajvi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>


                <Route exact path="/login" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li>
                                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                                    <ul className="fh5co-sub-menu">
                                                        <li><a href="#">Adventure</a></li>
                                                        <li><a href="#">Mystery &amp; HTML5</a></li>
                                                        <li><a href="#">Kids</a></li>
                                                        <li><a href="#">Comedy</a></li>
                                                        <li><a href="#">Romance</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Clients</a></li>
                                                <li><Link to="/artists">Artists</Link></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to='/login'>Login</Link></li>
                                                <li><Link to='/signup'>Signup</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <Login handleSubmit={this.handleSubmit}/>

                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div id="footer">
                                    <div className="container">
                                        <div className="row row-bottom-padded-md">
                                            <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                <h3>CRAFTONELIFE</h3>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Shop</h3>
                                                <ul>
                                                    <li><a href="#">By Genre</a></li>
                                                    <li><a href="#">By Taste</a></li>
                                                    <li><a href="#">By Price</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Company</h3>
                                                <ul>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Locations</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Customer Care</h3>
                                                <ul>
                                                    <li><a href="#">Refunds/Returns</a></li>
                                                    <li><a href="#">Shipping Policy</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 text-center">
                                                <p className="fh5co-social-icons">
                                                    <a href="#"><i className="icon-twitter2"/></a>
                                                    <a href="#"><i className="icon-facebook2"/></a>
                                                    <a href="#"><i className="icon-instagram"/></a>
                                                    <a href="#"><i className="icon-dribbble2"/></a>
                                                    <a href="#"><i className="icon-youtube"/></a>
                                                </p>
                                                <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                    className="icon-heart3"/> by Rajvi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>
                <Route exact path="/artists" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li>
                                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                                    <ul className="fh5co-sub-menu">
                                                        <li><a href="#">Adventure</a></li>
                                                        <li><a href="#">Mystery &amp; HTML5</a></li>
                                                        <li><a href="#">Kids</a></li>
                                                        <li><a href="#">Comedy</a></li>
                                                        <li><a href="#">Romance</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Clients</a></li>
                                                <li><Link to="/artists">Artists</Link></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to='/login'>Login</Link></li>
                                                <li><Link to='/signup'>Signup</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <Artists/>

                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div id="footer">
                                    <div className="container">
                                        <div className="row row-bottom-padded-md">
                                            <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                <h3>CRAFTONELIFE</h3>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Shop</h3>
                                                <ul>
                                                    <li><a href="#">By Genre</a></li>
                                                    <li><a href="#">By Taste</a></li>
                                                    <li><a href="#">By Price</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Company</h3>
                                                <ul>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Locations</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Customer Care</h3>
                                                <ul>
                                                    <li><a href="#">Refunds/Returns</a></li>
                                                    <li><a href="#">Shipping Policy</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 text-center">
                                                <p className="fh5co-social-icons">
                                                    <a href="#"><i className="icon-twitter2"/></a>
                                                    <a href="#"><i className="icon-facebook2"/></a>
                                                    <a href="#"><i className="icon-instagram"/></a>
                                                    <a href="#"><i className="icon-dribbble2"/></a>
                                                    <a href="#"><i className="icon-youtube"/></a>
                                                </p>
                                                <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                    className="icon-heart3"/> by Rajvi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>
                <Route exact path="/artistdetails" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li>
                                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                                    <ul className="fh5co-sub-menu">
                                                        <li><a href="#">Adventure</a></li>
                                                        <li><a href="#">Mystery &amp; HTML5</a></li>
                                                        <li><a href="#">Kids</a></li>
                                                        <li><a href="#">Comedy</a></li>
                                                        <li><a href="#">Romance</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Clients</a></li>
                                                <li><Link to="/artists">Artists</Link></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to='/login'>Login</Link></li>
                                                <li><Link to='/signup'>Signup</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <ArtistDetails/>

                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div id="footer">
                                    <div className="container">
                                        <div className="row row-bottom-padded-md">
                                            <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                <h3>CRAFTONELIFE</h3>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Shop</h3>
                                                <ul>
                                                    <li><a href="#">By Genre</a></li>
                                                    <li><a href="#">By Taste</a></li>
                                                    <li><a href="#">By Price</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Company</h3>
                                                <ul>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Locations</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Customer Care</h3>
                                                <ul>
                                                    <li><a href="#">Refunds/Returns</a></li>
                                                    <li><a href="#">Shipping Policy</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 text-center">
                                                <p className="fh5co-social-icons">
                                                    <a href="#"><i className="icon-twitter2"/></a>
                                                    <a href="#"><i className="icon-facebook2"/></a>
                                                    <a href="#"><i className="icon-instagram"/></a>
                                                    <a href="#"><i className="icon-dribbble2"/></a>
                                                    <a href="#"><i className="icon-youtube"/></a>
                                                </p>
                                                <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                    className="icon-heart3"/> by Rajvi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>


                <Route exact path="/signup" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li className="active"><a href="/">Home</a></li>
                                                <li>
                                                    <a href="#" className="fh5co-sub-ddown">Books</a>
                                                    <ul className="fh5co-sub-menu">
                                                        <li><a href="#">Adventure</a></li>
                                                        <li><a href="#">Mystery &amp; HTML5</a></li>
                                                        <li><a href="#">Kids</a></li>
                                                        <li><a href="#">Comedy</a></li>
                                                        <li><a href="#">Romance</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Clients</a></li>
                                                <li><Link to="/artists">Artists</Link></li>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to='/login'>Login</Link></li>
                                                <li><Link to='/signup'>Signup</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <Signup handleSignUp={this.handleSignUp}/>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                <div id="footer">
                                    <div className="container">
                                        <div className="row row-bottom-padded-md">
                                            <div className="col-md-6 col-sm-6 col-xs-12 fh5co-footer-link">
                                                <h3>CRAFTONELIFE</h3>
                                                <p>Far far away, behind the word mountains, far from the countries
                                                    Vokalia and
                                                    Consonantia, there live the blind texts.</p>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Shop</h3>
                                                <ul>
                                                    <li><a href="#">By Genre</a></li>
                                                    <li><a href="#">By Taste</a></li>
                                                    <li><a href="#">By Price</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Company</h3>
                                                <ul>
                                                    <li><a href="#">About</a></li>
                                                    <li><a href="#">Team</a></li>
                                                    <li><a href="#">Locations</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                    <li><a href="#">Press</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-2 col-sm-2 col-xs-12 fh5co-footer-link">
                                                <h3>Customer Care</h3>
                                                <ul>
                                                    <li><a href="#">Refunds/Returns</a></li>
                                                    <li><a href="#">Shipping Policy</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Contact Us</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 text-center">
                                                <p className="fh5co-social-icons">
                                                    <a href="#"><i className="icon-twitter2"/></a>
                                                    <a href="#"><i className="icon-facebook2"/></a>
                                                    <a href="#"><i className="icon-instagram"/></a>
                                                    <a href="#"><i className="icon-dribbble2"/></a>
                                                    <a href="#"><i className="icon-youtube"/></a>
                                                </p>
                                                <p>Copyright 2017. All Rights Reserved. <br/>Made with <i
                                                    className="icon-heart3"/> by Rajvi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>

            </div>


        );

    }
}

export default withRouter(NewerHomePage);

