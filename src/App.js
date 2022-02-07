import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import IE3 from './pages/IE3';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App font-link">
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />     
            <Route exact path="/events" element={<Events />} />    
            <Route exact path="/ie3" element={<IE3 />} />      
            <Route path="*" element={<Navigate to ="/" />}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
