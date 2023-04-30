import React from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
// import About from './components/About';
// import Work from './Work';
import Footer from './Footer';
import UXWorks from './UXWorks';

const App = () => {
  return (
    <>
    <div className='background-image'>
      <Home />
      
      
      <UXWorks />
      
      <Footer />
      </div>
    </>
  );
};

export default App;
