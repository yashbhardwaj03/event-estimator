import React from 'react';
import './AnimatedBlob.css';



function AnimatedBlob() {
  return (
    <div className="relative w-48 h-48 animate-blob">
      <svg viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" fill="blue">
        <path d="M377,290Q359,340,313.5,370Q268,400,216.5,385Q165,370,104.5,340.5Q44,311,36.5,237Q29,163,85,116Q141,69,207,62Q273,55,327.5,88Q382,121,388.5,180.5Q395,240,377,290Z" />
      </svg>
    </div>
  );
}

export default AnimatedBlob;
