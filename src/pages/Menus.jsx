// src/pages/Menus.jsx
import React, { useState } from "react";
import { initialMenus, initialDrinks } from "../state/data";
import "./Menus.css";

const Menus = () => {
  const [menus, setMenus] = useState(initialMenus);

  return (
    <div className="menus-page">
      <h1>Menus</h1>

      {menus.map(menu => (
        <div key={menu.id} className="menu-card">
          <h2>{menu.name}</h2>
          <ul>
            {menu.drinks.map(drink => (
              <li key={drink.id}>
                <strong>{drink.name}</strong> - {drink.description}
                <div className="drink-categories">
                  {drink.categories.map(cat => (
                    <span key={cat} className="category-icon">{initialCategories.find(c => c.name === cat)?.icon}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menus;

