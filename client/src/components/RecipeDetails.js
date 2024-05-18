import React from 'react';

const RecipeDetails = ({ recipes, selectedRecipe }) => {
  const recipe = recipes.find(r => r.id === selectedRecipe);
  if (!recipe) return <p>No recipe found</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
