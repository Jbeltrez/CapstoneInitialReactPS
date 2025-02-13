// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import FloatingMenu from './components/FloatingMenu';
import Home from './pages/Home';
import Drinks from './pages/Drinks';
import Menus from './pages/Menus';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'drinks':
        return <Drinks />;
      case 'menus':
        return <Menus />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setCurrentPage={setCurrentPage} />
      <div className="main-content">
        {renderPage()}
      </div>
      <FloatingMenu setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
