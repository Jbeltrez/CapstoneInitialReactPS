import React, { useState } from "react";
import { initialCategories, initialDrinks } from "../state/data";
import "./Drinks.css";

const Drinks = () => {
  const [drinks, setDrinks] = useState(initialDrinks);
  const [drinkName, setDrinkName] = useState("");
  const [drinkDescription, setDrinkDescription] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  return (
    <div className="drinks-page">
      <h1>Manage Drinks</h1>

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

      <div className="drinks-list">
        {drinks.map((drink) => (
          <div key={drink.id} className="drink-card">
            <h3>{drink.name}</h3>
            <p>{drink.description}</p>
            <div className="drink-categories">
              {drink.categories.map(cat => (
                <span key={cat} className="category-icon">{initialCategories.find(c => c.name === cat)?.icon}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;

