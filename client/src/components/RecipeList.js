import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <ul className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe.id)}>
            <RecipeCard recipe={recipe} />
          </li>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </ul>
  );
};

export default RecipeList;
