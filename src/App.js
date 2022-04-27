import React from 'react';
import Contact from './contact';
import About from './About';
import Home from './home';
import Header from './Header';
import Footer from './Footer';
import Login from './login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';


function App(props) {
  
  return(
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/contact' element={() => <Contact auth={props.islogged}/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
        <Footer/>
     </Router> 
  )

}

export default App;
