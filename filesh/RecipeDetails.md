import React from 'react';

function RecipeDetails({ recipes, selectedRecipe }) {
  const recipe = recipes.find((recipe) => recipe.id === selectedRecipe);

  if (!recipe) return null; // Handle case where no recipe is selected

  return (
    <div>
      <h2>{recipe.name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;