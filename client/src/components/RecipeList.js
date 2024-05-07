import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'; // Import RecipeCard component

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(null); // State to store potential errors

  useEffect(() => {
    // Simulated recipe data (replace with your actual data)
    const sampleRecipes = [
      {
        _id: '1',
        title: 'Spaghetti Carbonara',
        ingredients: ['pasta', 'eggs', 'cheese', 'bacon'],
        // Other recipe properties...
      },
      // Add more recipes here...
    ];

    // Set the recipes state with the sample data
    setRecipes(sampleRecipes);
  }, []); // Empty dependency array to run this effect only once

  return (
    <ul className="recipe-list">
      {error ? (
        <p>Error fetching recipes: {error.message}</p>
      ) : recipes.length > 0 ? (
        recipes.map((recipe) => (
          <li key={recipe._id}>
            <RecipeCard recipe={recipe} />
          </li>
        ))
      ) : (
        <p>Loading recipes...</p>
      )}
    </ul>
  );
};

export default RecipeList;