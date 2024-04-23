import React, { useState } from 'react';
import Hero from './Hero';
import EventTypes from './EventTypes';
import Navbar from '../../components/Navbar';
import Feedback from './Feedback';
import Footer from '../../components/Footer';
import Timeline from './Timeline';

// Styles
import './HomePage.css'



function HomePage() {
  const [activeLink, setActiveLink] = React.useState('Home'); // Initial active link
  return (
    <div className="min-h-screen font-sans">
      <Hero/>
      <EventTypes />
      <Timeline/>
      <Feedback/>
      <Footer/>
      <Navbar activeLink={activeLink} />
    </div>
  );
}

export default HomePage;
