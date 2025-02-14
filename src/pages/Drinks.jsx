// src/pages/Drinks.jsx
import React, { useState } from 'react';
import { initialDrinks, initialCategories } from '../state/data';
import './Drinks.css';

const Drinks = () => {
  const [drinks, setDrinks] = useState(initialDrinks);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter drinks based on the selected category.
  const filteredDrinks = selectedCategory
    ? drinks.filter(drink => drink.categories.includes(selectedCategory))
    : drinks;

  return (
    <div className="drinks-page">
      <h1>Drinks</h1>
      <div className="filter-bar">
        {initialCategories.map(cat => (
          <button key={cat.id} onClick={() => setSelectedCategory(cat.name)}>
            <span className="icon">{cat.icon}</span> {cat.name}
          </button>
        ))}
        <button onClick={() => setSelectedCategory(null)}>Show All</button>
      </div>
      <ul className="drinks-list">
        {filteredDrinks.map(drink => (
          <li key={drink.id}>
            {drink.name} - {drink.categories.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drinks;

