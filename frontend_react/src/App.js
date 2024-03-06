import React from 'react'

import { About,Footer, Header, Skills,Testimonial, Work } from './container';
import { Navbar } from './components/index';
import './App.scss';
import Experience from './container/Experience/Experience';

const App = () => {
  return (
    <div className="app">
    <Navbar />
    <Header /> 
    <About /> 
    <Skills />
    <Experience />
    <Work />
    <Testimonial />
    <Footer />
    </div>
  );
}

export default App;