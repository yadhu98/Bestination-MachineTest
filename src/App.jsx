import React from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import backGroundTrees from './assets/backgrountrees.svg'
import WhatOfferSection from './components/WhatOfferSection';
function App() {
  return (
    <div className="landing-page">
      <div id='backdrop'></div>
      <img id="background-trees" src={backGroundTrees} alt="bg-trees" />
      <Header />
      <main>
        <Hero/>
        <WhatOfferSection/>
      </main>
      {/* <footer className="footer">
        <p>&copy; 2025 Bestination Holidays. All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a> | <a href="#terms">Terms of Service</a> | <a href="#contact">Contact Us</a>
        </div>
      </footer> */}
    </div>
  );
}

export default App;