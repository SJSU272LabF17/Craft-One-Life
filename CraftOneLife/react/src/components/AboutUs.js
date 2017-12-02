import React, {Component} from 'react';
import aboutus from '../images/aboutus.jpg';

class AboutUs extends Component{
    render(){
        return(
            <div className="row justify-content-md-center">
            <div className="col-sm-12 col-md-12">
            <h1>ABOUT US</h1>

            </div>
                <div className="col-sm-12 col-md-12" style={{marginTop:50}}>
                </div>

                <div className="col-sm-4 col-md-4">
                    <img style={{width:270, height:250}} src={aboutus}/>
                </div>
                <div className="col-sm-6 col-md-6" style={{textAlign:"justify"}}>
                    <p>CraftOneLife, simply put, crafts lives of writers  living with homelessness and disabilities through the celebration and sale of their writing. CraftOneLife is helps those people in finding their niche.

                        Our writers are given the chance to secure their own income through the sale of their fascinating imagination and enthralling experiences. By making those imaginations known to people by CraftOneLife.com, we help them gain self-confidence and find their goals in life.

                        To run a fiscally sustainable business which is imperative to make sustainable change, we keep 10 % of the total profit and the writer gets back the remaining profit as it’s his imagination.
                    </p>
                    <br/>   <br/>   <br/>
                    <h3 style={{textAlign:"left"}}>Our Story</h3>
                    <p>

                        Rajvi Modh embarked on her mission when she was 23.

                        After getting a grant from San Jose State to encourage homeless people to write she conducted writing competitions along with amazing prizes for the winners which attracted many participators. But she was amazed by the incredible writing she got to read. Amazing thinking were being born and fading into oblivion. Rajvi then committed herself to share those writings with the world and deterring those from fading into oblivion.

                        After one year, she, along with her three colleagues, founded CratfOneLife.

                    </p>
                </div>
            </div>
        )
}
}
export default AboutUs;