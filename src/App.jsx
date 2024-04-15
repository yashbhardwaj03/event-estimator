import React, { useState } from 'react';
import './App.css'; // Import custom CSS (optional)
import Hero from './Hero';
import EventTypes from './EventTypes';
import Navbar from './Navbar';
import Feedback from './Feedback';
import Footer from './Footer';
import Timeline from './Timeline';




function App() {

  const card = [
    {
      imageSrc: 'path/to/image1.jpg',
      title: 'Card Title 1',
      description: 'This is a description of card 1.',
      category: 'party',
    },
    {
      imageSrc: 'path/to/image1.jpg',
      title: 'Card Title 2',
      description: 'This is a description of card 2.',
      category: 'meeting',
    },
    {
      imageSrc: 'path/to/image1.jpg',
      title: 'Card Title 3',
      description: 'This is a description of card 3.',
      category: 'ceremoney',
    },
    {
      imageSrc: 'path/to/image1.jpg',
      title: 'Card Title 4',
      description: 'This is a description of card 4.',
      category: 'meetup',
    },
    {
      imageSrc: 'path/to/image1.jpg',
      title: 'Card Title 5',
      description: 'This is a description of card 5.',
      category: 'party',
    },
    
  ];

  const [activeLink, setActiveLink] = React.useState('Home'); // Initial active link


  return (
    <div className="min-h-screen font-sans">
      <Hero/>
      <EventTypes events={card} />
      <Timeline/>
      <Feedback/>
      <Footer/>
      <Navbar activeLink={activeLink} />
    </div>
  );
}

export default App;
