import React, {Component} from 'react';
import {Route, withRouter, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import * as API from '../api/API';
import {DropdownMenu, MenuItem} from 'react-bootstrap-dropdown-menu';

import BeforeHeader from "./BeforeHeader";
import AfterHeader from "./AfterHeader";
import Login from "./Login";
import Signup from "./Signup";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Artists from "./Artists";
import ArtistDetails from './ArtistDetails';
import BookDetails from './BookDetails';
import AdminApproveBooks from './AdminApproveBooks';
import AdminApproveUsers from './AdminApproveUsers';
import ArtistUploadBooks from './ArtistUploadBooks';
import ArtistProfilePage from './ArtistProfilePage';
import ArtistDisplayProfile from './ArtistDisplayProfile';
import BooksAdventure from './BooksAdventure';
import UserCart from './UserCart';
import MyOrders from './MyOrders';

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
        showSignupModal: false,
        bookDetails:''
    };

    handleSubmit = (userdata) => {
        API.doLogin(userdata)
            .then((res) => {
                //alert("back in newer homepage : " + JSON.stringify(res.results[0].user_type));
                if (res.status === '201') {
                    alert("in 201");
                    var user=res.results[0];
                    localStorage.setItem("user_id",res.results[0].user_id);
                    if(user.is_Approved===1 && user.user_type==="H"){
                        alert("in H");
                        this.setState({
                            isLoggedIn: true
                        });
                        localStorage.setItem("isLoggedIn","true");
                        this.props.history.push("/artistdisplayprofile");
                    }
                    else if (user.user_type==="A"){
                        alert("in A");
                        this.setState({
                            isLoggedIn: true
                        });
                        localStorage.setItem("isLoggedIn","true");
                        this.props.history.push("/adminapproveusers");
                    }
                    else if (user.user_type==="U"){
                        alert("in U");
                        this.setState({
                            isLoggedIn: true
                        });
                        localStorage.setItem("isLoggedIn","true");
                        this.props.history.push("/");
                    }
                    else {
                        alert("Your application is being reviewed . Please check back again later");
                    }



                } else {
                    this.setState({
                        isLoggedIn: false,
                        message: "Wrong username or password. Try again..!!"
                    });
                }
            });
    };
    getBookDetails = (bookDetails) => {

        this.setState({bookDetails:bookDetails});
        this.props.history.push("/getbookdetails");

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


    handleLogout = () => {
        alert('logout called');
        API.doLogout()
            .then((status) => {
                if(status === 201){
                    this.setState({
                        isLoggedIn: false
                    });
                    localStorage.removeItem('user_id');
                    localStorage.removeItem('isLoggedIn');
                    this.props.history.push("/");
                }
            });
    };

    render() {
        return (
            <div>
                <Route exact path="/" render={() => (

                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">

                        {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}

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
                                                    className="icon-heart3"/></p>
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
                            {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}
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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>


                <Route exact path="/usercart" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <UserCart/>

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
                                                    className="icon-heart3"/> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>

                <Route exact path="/bookadventure" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}
                            <div className="fh5co-hero">
                                <div className="container">

                                    <BooksAdventure getBookDetails={this.getBookDetails}/>


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
                                                    className="icon-heart3"/></p>
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
                            {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}
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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>

                <Route exact path="/contactus" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}
                            <div className="fh5co-hero">
                                <div className="container">

                                    <ContactUs/>


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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>

                <Route exact path="/aboutus" render={() => (

                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}
                            <div className="fh5co-hero">
                                <div className="container">

                                    <AboutUs/>


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
                                                    className="icon-heart3"/> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>


                <Route exact path="/myorders" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            {(localStorage.getItem("isLoggedIn")==="true" ) ? <AfterHeader/> : <BeforeHeader/>}
                            <div className="fh5co-hero">
                                <div className="container">

                                    <MyOrders/>


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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>


{/*------------------------------------------------------------ARTIST PAGES-----------------------------------------------------------*/}

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
                                                <li><Link to='/artistprofilepage'>MyProfile</Link></li>
                                                <li><Link to='/artistdisplayprofile'>Display Profile</Link></li>
                                                <li><Link to='/artistuploadbooks'>Upload Books</Link></li>
                                                <li><a onClick={()=>this.handleLogout()}>Logout</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">

                    <ArtistProfilePage/>

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
                                                    className="icon-heart3"/></p>
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
                                                <li><Link to='/artistprofilepage'>MyProfile</Link></li>
                                                <li><Link to='/artistdisplayprofile'>Display Profile</Link></li>
                                                <li><Link to='/artistuploadbooks'>Upload Books</Link></li>
                                                <li><a onClick={()=>this.handleLogout()}>Logout</a></li>
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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>

                <Route exact path="/artistdisplayprofile" render={() => (
                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li><Link to='/artistprofilepage'>MyProfile</Link></li>
                                                <li><Link to='/artistdisplayprofile'>Display Profile</Link></li>
                                                <li><Link to='/artistuploadbooks'>Upload Books</Link></li>
                                                <li><a onClick={()=>this.handleLogout()}>Logout</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">

                                        <ArtistDisplayProfile/>

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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>
                {/*------------------------------------------------------------ADMIN PAGES-----------------------------------------------------------*/}







                <Route exact path="/adminapproveusers" render={() => (

                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li><Link to='/adminapproveusers'>Approve Users</Link></li>
                                                <li><Link to='/adminapprovebooks'>Approve Books</Link></li>
                                                <li><a onClick={()=>this.handleLogout()}>Logout</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <AdminApproveUsers/>
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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>

                )}/>


                <Route exact path="/adminapprovebooks" render={() => (

                    <div id="fh5co-wrapper">
                        <div id="fh5co-page">
                            <header id="fh5co-header-section" className="sticky-banner">
                                <div className="container">
                                    <div className="nav-header">
                                        <a href="#" className="js-fh5co-nav-toggle fh5co-nav-toggle dark"/>
                                        <h1 id="fh5co-logo"><a href="/">CraftOnelife</a></h1>

                                        <nav id="fh5co-menu-wrap" role="navigation">
                                            <ul className="sf-menu" id="fh5co-primary-menu">
                                                <li><Link to='/adminapproveusers'>Approve Users</Link></li>
                                                <li><Link to='/adminapprovebooks'>Approve Books</Link></li>
                                                <li><a onClick={()=>this.handleLogout()}>Logout</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <AdminApproveBooks/>
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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>

                )}/>



                {/* <Route exact path="/getbookdetails" render={() => (

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
                                                <li><Link to="/aboutus">About Us</Link></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><Link to="/login">Login</Link></li>
                                                <li><Link to='/signup'>Signup</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </header>
                            <div className="fh5co-hero">
                                <div className="container">

                                    <BookDetails details={this.state.bookDetails}/>


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
                                                    className="icon-heart3"/></p>
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
                                                    className="icon-heart3"/> </p>
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
                                                    className="icon-heart3"/></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </div>
                )}/>*/}



            </div>


        );

    }
}

export default withRouter(NewerHomePage);

