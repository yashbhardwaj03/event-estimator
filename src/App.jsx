import React, { useState } from 'react';
import './App.css'; // Import custom CSS (optional)
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Component Imports
import HomePage from './pages/Home/HomePage';
import TestingPage from './pages/Testing/TestingPage1';
import TestingPage2 from './pages/Testing/TestingPage2';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='testing' element={<TestingPage/>} />
          <Route path='testing/:category' element={<TestingPage2/>} />
          <Route path='*' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
