import React from 'react';
import './App.css'; // Import custom CSS (optional)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports
import HomePage from './pages/Home/HomePage';
import CostEstimator from './pages/Event/CostEstimator';
import Event from './pages/Event/Event';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='event' element={<Event/>} />
          <Route path='event/:category' element={<CostEstimator/>} />
          <Route path='*' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
