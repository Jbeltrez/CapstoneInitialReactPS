// src/components/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setCurrentPage }) => {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setCurrentPage('home')}>Home</li>
        <li onClick={() => setCurrentPage('drinks')}>Drinks</li>
        <li onClick={() => setCurrentPage('menus')}>Menus</li>
      </ul>
    </div>
  );
};

export default Sidebar;

