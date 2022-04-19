import React from "react";
import { Link } from "react-router-dom";
import {Navi, Flx, Log, Para} from './components/Style';
import instlogo from './inst.png';
import flogo from './fb.png';
import { linkStyle } from "./components/Style";


function Home () {
    return(
        <div>
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
        
        <Flx>
            <p>Welcome to Himalayan coffee where taste meets passion.</p>
        </Flx>
        </div>
    );
}
export default Home;