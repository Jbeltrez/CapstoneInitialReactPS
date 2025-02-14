// src/pages/Drinks.jsx
import React, { useState } from "react";
import { initialCategories, initialDrinks } from "../state/data";
import "./Drinks.css";

const Drinks = () => {
  const [drinks, setDrinks] = useState(initialDrinks);
  const [drinkName, setDrinkName] = useState("");
  const [drinkDescription, setDrinkDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Add a new drink
  const handleAddDrink = () => {
    if (!drinkName.trim()) return;
    const newDrink = {
      id: Date.now(),
      name: drinkName,
      description: drinkDescription,
      categories: selectedCategories,
    };
    setDrinks([...drinks, newDrink]);
    setDrinkName("");
    setDrinkDescription("");
    setSelectedCategories([]);
  };

  // Edit a drink's name or description
  const handleEditDrink = (id, newName, newDescription) => {
    setDrinks(drinks.map(drink => 
      drink.id === id ? { ...drink, name: newName, description: newDescription } : drink
    ));
  };

  // Remove a drink
  const handleRemoveDrink = (id) => {
    setDrinks(drinks.filter(drink => drink.id !== id));
  };

  return (
    <div className="drinks-page">
      <h1>Manage Drinks</h1>

      {/* Add Drink Form */}
      <div className="add-drink-form">
        <input 
          type="text" 
          placeholder="Drink Name" 
          value={drinkName} 
          onChange={(e) => setDrinkName(e.target.value)} 
        />
        <textarea 
          placeholder="Drink Description" 
          value={drinkDescription} 
          onChange={(e) => setDrinkDescription(e.target.value)} 
        />
        
        <div className="categories">
          {initialCategories.map(category => (
            <label key={category.id} className="category-checkbox">
              <input
                type="checkbox"
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

        <button onClick={handleAddDrink}>Add Drink</button>
      </div>

      {/* List of Drinks */}
      <ul className="drinks-list">
        {drinks.map((drink) => (
          <li key={drink.id}>
            <input
              type="text"
              value={drink.name}
              onChange={(e) => handleEditDrink(drink.id, e.target.value, drink.description)}
            />
            <textarea
              value={drink.description}
              onChange={(e) => handleEditDrink(drink.id, drink.name, e.target.value)}
            />
            <div className="drink-categories">
              {drink.categories.map(cat => (
                <span key={cat} className="category-icon">{initialCategories.find(c => c.name === cat)?.icon}</span>
              ))}
            </div>
            <button onClick={() => handleRemoveDrink(drink.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drinks;

