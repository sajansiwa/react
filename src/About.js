import React from 'react';
import { Link } from "react-router-dom";
import {Navi, Flx, Log} from './components/Style';
import instlogo from './inst.png';
import flogo from './fb.png';
import { linkStyle } from "./components/Style";

function About () {
    return(
        <Flx>   
            <div>
            <Navi><Link to="/" style={linkStyle}><h2>Home</h2></Link></Navi>
            <Navi><Link to="Contact" style={linkStyle}><h2>Contact Us</h2></Link></Navi>
            <Navi><Link to="About" style={linkStyle}><h2>About Us</h2></Link></Navi>
            <Navi><Link to="login" style={linkStyle}><h2>Login</h2></Link></Navi>
            </div>
            <div>
            <Log src={instlogo} alt="instlogo"></Log>
            <Log src={flogo} alt="fblogo"></Log>
            </div>
        </Flx>
    );
}
export default About;