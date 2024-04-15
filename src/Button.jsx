// src/components/Button.jsx

import React, { useState } from 'react';

const Button = ({ category }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((prevIsActive) => !prevIsActive);
  };

  return (
    <button
      onClick={toggleActive}
      className={`px-4 py-1 rounded-3xl transition ease-in-out duration-150 hover:-translate-y-1 hover:scale-110 ${
        isActive ? 'bg-blue-700 text-white' : 'bg-black text-white '
      }`}
    >
      {category}
    </button>
  );
};

export default Button;
