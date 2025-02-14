// src/pages/Menus.jsx
import React, { useState } from 'react';
import { initialMenus } from '../state/data';
import './Menus.css';

const Menus = () => {
  const [menus, setMenus] = useState(initialMenus);
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <div className="menus-page">
      <h1>Menus</h1>
      <div className="menus-list">
        {menus.map(menu => (
          <div key={menu.id} className="menu-card" onClick={() => setSelectedMenu(menu)}>
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
      {selectedMenu && (
        <div className="menu-details">
          <h2>{selectedMenu.name}</h2>
          <ul>
            {selectedMenu.drinks.map(drink => (
              <li key={drink.id}>{drink.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menus;

