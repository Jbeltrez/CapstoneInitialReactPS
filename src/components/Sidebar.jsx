// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/drinks">Drinks</Link></li>
        <li><Link to="/menus">Menus</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

