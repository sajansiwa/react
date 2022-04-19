import React from 'react';
import Contact from './contact';
import About from './About';
import Home from './home';
import Login from './login';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      <Footer/>

    </Router>   
  );
}

export default App;
