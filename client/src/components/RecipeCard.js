import React from 'react';
import './RecipeCard.css'; // Import the CSS file


const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <h2>{recipe.name}</h2>
      <p className="recipe-ingredients">{recipe.ingredients.slice(0, 3).join(', ')}...</p>
      <button className="view-button">View Recipe</button>
    </div>
  );
};

export default RecipeCard;