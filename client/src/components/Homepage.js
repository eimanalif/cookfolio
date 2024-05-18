import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipeButton from './AddRecipeButton';

const Homepage = ({ recipes, onAddRecipe, onSelectRecipe }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddRecipeClick = () => {
    navigate('/add-recipe');
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name && recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="homepage">
      <h1>Recipe Book</h1>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <AddRecipeButton onClick={handleAddRecipeClick} />
      <RecipeList recipes={filteredRecipes} onSelectRecipe={onSelectRecipe} />
    </div>
  );
};

export default Homepage;
