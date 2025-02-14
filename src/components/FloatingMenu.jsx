// src/components/FloatingMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingMenu.css';

const FloatingMenu = () => {
  return (
    <div className="floating-menu">
      <Link to="/drinks">
        <button>New Drink</button>
      </Link>
      <Link to="/new-menu">
        <button>New Menu</button>
      </Link>
    </div>
  );
};

export default FloatingMenu;

