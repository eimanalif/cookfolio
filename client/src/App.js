import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './components/Homepage';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import './App.css'; // Import the CSS file

const initialRecipes = [
  {
    id: 1,
    name: "Chocolate Chip Cookies",
    ingredients: ["1 cup flour", "1/2 cup butter", "1 cup chocolate chips"],
  },
  // ... more recipes
];

function App() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, { ...newRecipe, id: Date.now().toString() }]);
    navigate('/');
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={<Homepage 
            recipes={recipes} 
            onAddRecipe={handleAddRecipe} 
            onSelectRecipe={handleSelectRecipe} 
          />} 
        />
        <Route 
          path="/add-recipe" 
          element={<AddRecipe onAddRecipe={handleAddRecipe} />} 
        />
        {selectedRecipeId && (
          <Route 
            path="/recipe-details/:id" 
            element={<RecipeDetails recipes={recipes} selectedRecipeId={selectedRecipeId} />} 
          />
        )}
      </Routes>
    </div>
  );
}

export default App;
