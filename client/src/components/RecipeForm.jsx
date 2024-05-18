// AddRecipeForm.js
import React, { useState } from 'react';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleAddRecipe = (e) => {
    e.preventDefault();
    if (title.trim() && ingredients.trim()) {
      const newRecipe = {
        _id: Date.now().toString(), // Simple unique ID based on timestamp
        title,
        ingredients: ingredients.split(',').map(ingredient => ingredient.trim()), // Split ingredients by comma and trim spaces
      };
      onAddRecipe(newRecipe);
      setTitle('');
      setIngredients('');
    }
  };

  return (
    <form onSubmit={handleAddRecipe}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma-separated)"
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
