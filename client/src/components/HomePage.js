import React, { useState } from 'react';
import RecipeList from './RecipeList';
import AddRecipeButton from './AddRecipeButton';
import AddRecipeForm from './AddRecipeForm'; // Import AddRecipeForm component

const HomePage = () => {
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);

  const handleAddRecipeClick = () => {
    setShowAddRecipeForm(true);
  };

  const handleCloseAddRecipeForm = () => {
    setShowAddRecipeForm(false);
  };

  // Function to handle form submission (replace with your actual logic)
  const handleAddRecipeSubmit = async (recipeData) => {
    try {
      const response = await fetch('/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipeData),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Recipe created:', data);
  
      // Handle successful submission (e.g., reset form, close form)
      handleCloseAddRecipeForm();
    } catch (error) {
      console.error('Error submitting recipe:', error);
      // Display error message to the user (optional)
    }
  };
};

export default HomePage;