// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import FloatingMenu from './components/FloatingMenu';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Menus from './pages/Menus';
import NewMenu from './pages/NewMenu';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/drinks" element={<Drinks />} />
            <Route path="/menus" element={<Menus />} />
            <Route path="/new-menu" element={<NewMenu />} />
          </Routes>
        </div>
        <FloatingMenu />
      </div>
    </BrowserRouter>
  );
}

export default App;
