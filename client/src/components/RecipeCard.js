import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.name}</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
