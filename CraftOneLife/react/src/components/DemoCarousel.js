import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import '../css/carousel.css';
import img1 from '../images/homeSlider.png';
import img2 from '../images/homeSlider2.jpg';
import img3 from '../images/homeSlider3.png';
import img4 from '../images/about1.jpg';
import img5 from '../images/img_4623.jpg';

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
                <div>
                <img src={img4} style={{width:1400, height:500}} />

            </div>
                <div>
                <img src={img5} style={{width:1400, height:420}} />

            </div>
            </Carousel>
        );
    }
}

export default DemoCarousel;