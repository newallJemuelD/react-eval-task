import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Support from './pages/support';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/support" element={<Support/>} />
    </Routes>
  );
};

export default App;