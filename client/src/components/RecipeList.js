import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard'; // Import RecipeCard component

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null); // State to store potential errors

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/recipes');
        if (!response.ok) {
          throw new Error(`Network response was not ok (status: ${response.status})`);
        }
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err);
        console.error(err);
      }
    };

    fetchRecipes();
  }, []);

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