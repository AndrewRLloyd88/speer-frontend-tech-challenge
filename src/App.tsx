import React, { useState, useEffect } from 'react';
import './styles/main.css';
import HeroSection from './components/HeroSection';

interface AppProps {}

const App = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default App;
