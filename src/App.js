import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';


function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/Contact' element = {<Contact />}></Route>
      </Routes> 
    </Router>
  );
}

export default App;
