import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Hero from '../Components/Hero';

import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function App() {
  return (
    <div>
   <Hero />
   <About />
   <Projects />
   <Contact />
   <Footer />
   </div>
  );
}

export default App;
