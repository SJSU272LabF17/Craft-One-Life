import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import '../css/carousel.css';
import img1 from '../images/homeSlider.png';
import img2 from '../images/homeSlider2.jpg';
import img3 from '../images/homeSlider3.png';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay={true} showThumbs={false}>
                <div>
                    <img src={img1} style={{width:1400, height:400}}/>

                </div>
                <div>
                    <img src={img2} style={{width:1400, height:400}}/>

                </div>
                <div>
                    <img src={img3} style={{width:1400, height:350}} />

                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;