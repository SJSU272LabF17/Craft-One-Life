import React, {Component} from 'react';
import './App.css';

// import HomePage from "./components/HomePage";
// import NewHomePage from "./components/NewHomePage";

import {BrowserRouter} from 'react-router-dom';
import Upload_book from "./components/Upload_book";
import Homeless_Profile from "./components/profile"

    class App extends Component {
        render() {
            return (
                <div className="App">
s                    <BrowserRouter>
                       {/* <Upload_book/>*/}
                    <Homeless_Profile></Homeless_Profile>
                    </BrowserRouter>
                </div>
            );
        }
    }

    export default App;
