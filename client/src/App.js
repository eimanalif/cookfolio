import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import Header from './components/Header'; // Assuming Header.js exists in components folder
import RecipeList from './components/RecipeList';
import AddRecipeButton from './components/AddRecipeButton';
// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { NotificationProvider } from './components/NotificationContext';
import AddRecipe from './components/AddRecipe'; // Import AddRecipe component
import RecipeDetails from './components/RecipeDetails';
import RecipeForm from './components/RecipeForm';
//import MyComponent from './MyComponent'; 


const initialRecipes = [
  {
    id: 1,
    name: "Chocolate Chip Cookies",
    ingredients: ["1 cup flour", "1/2 cup butter", "1 cup chocolate chips"],
  },
  // ... more recipes
];

function App() {
  const navigate = useNavigate(); // Get navigation function

  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id);
  };
  const handleAddRecipeClick = () => {
    navigate('/add-recipe');
  };
  
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
        <AddRecipeButton onClick={handleAddRecipeClick} />
        {/* Render RecipeDetails or RecipeForm conditionally based on selectedRecipeId */}
        {selectedRecipeId ? (
            <RecipeDetails recipes={recipes} selectedRecipe={selectedRecipeId} />
        ) : (
            <RecipeForm
                recipes={recipes}
                setRecipes={setRecipes}
                selectedRecipe={recipes.find((r) => r.id === selectedRecipeId)}
            />
        )}
    </div>
);
}

export default App;