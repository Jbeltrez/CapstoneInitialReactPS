// src/pages/NewMenu.jsx
import React, { useState } from 'react';
import { initialCategories } from '../state/data';
import './NewMenu.css';

const NewMenu = ({ onMenuCreate = (menu) => console.log(menu) }) => {
  const [menuName, setMenuName] = useState('');
  const [drinkName, setDrinkName] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [drinks, setDrinks] = useState([]);

  // Adds a new drink with the entered name and selected categories.
  const handleAddDrink = () => {
    if (!drinkName.trim()) return;
    const newDrink = {
      id: Date.now(),
      name: drinkName,
      categories: selectedCategories,
    };
    setDrinks([...drinks, newDrink]);
    // Reset drink fields after adding.
    setDrinkName('');
    setSelectedCategories([]);
  };

  // Removes a drink from the current menu.
  const handleRemoveDrink = (id) => {
    setDrinks(drinks.filter(drink => drink.id !== id));
  };

  // On form submission, create a new menu and pass it to the callback.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!menuName.trim()) {
      alert('Please enter a menu name');
      return;
    }
    const newMenu = {
      id: Date.now(),
      name: menuName,
      drinks: drinks,
    };
    // For now, log the new menu (or update your global state)
    onMenuCreate(newMenu);
    // Reset the form.
    setMenuName('');
    setDrinks([]);
  };

  return (
    <div className="new-menu">
      <h2>Create New Menu</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Menu Name:</label>
          <input
            type="text"
            value={menuName}
            onChange={(e) => setMenuName(e.target.value)}
            placeholder="Enter menu name"
          />
        </div>

        <div className="drink-input">
          <h3>Add Drink</h3>
          <div className="form-group">
            <label>Drink Name:</label>
            <input
              type="text"
              value={drinkName}
              onChange={(e) => setDrinkName(e.target.value)}
              placeholder="Enter drink name"
            />
          </div>
          <div className="form-group">
            <label>Categories:</label>
            <div className="categories-checkboxes">
              {initialCategories.map((category) => (
                <label key={category.id} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={category.name}
                    checked={selectedCategories.includes(category.name)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedCategories([...selectedCategories, category.name]);
                      } else {
                        setSelectedCategories(selectedCategories.filter(c => c !== category.name));
                      }
                    }}
                  />
                  <span className="category-icon">{category.icon}</span> {category.name}
                </label>
              ))}
            </div>
          </div>
          <button type="button" onClick={handleAddDrink}>
            Add Drink
          </button>
        </div>

        <div className="drinks-list">
          <h3>Current Drinks in Menu</h3>
          {drinks.length === 0 ? (
            <p>No drinks added yet.</p>
          ) : (
            <ul>
              {drinks.map((drink) => (
                <li key={drink.id}>
                  <strong>{drink.name}</strong> - Categories: {drink.categories.join(', ')}
                  <button type="button" onClick={() => handleRemoveDrink(drink.id)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button type="submit">Create Menu</button>
      </form>
    </div>
  );
};

export default NewMenu;

