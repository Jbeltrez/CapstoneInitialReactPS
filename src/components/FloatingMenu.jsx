// src/components/FloatingMenu.jsx
import React from 'react';
import './FloatingMenu.css';

const FloatingMenu = ({ setCurrentPage }) => {
  return (
    <div className="floating-menu">
      <button onClick={() => setCurrentPage('drinks')}>New Drink</button>
      <button onClick={() => setCurrentPage('menus')}>New Menu</button>
    </div>
  );
};

export default FloatingMenu;

