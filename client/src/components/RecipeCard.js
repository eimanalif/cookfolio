import React from 'react';
import './RecipeCard.css'; // Import the CSS file

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.ingredients.slice(0, 3).join(', ')}...</p>
      <button>View Recipe</button>
    </div>
  );
};

export default RecipeCard;