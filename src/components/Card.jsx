import React from 'react';

function Card({ imageSrc, title, description }) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md w-80 h-80">  {/* Fixed width and height */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover transition duration-300 ease-in-out transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
