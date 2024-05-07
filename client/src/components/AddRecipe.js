import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null); // For image upload (optional)

  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare recipe data object
    const recipe = {
      name,
      ingredients,
      instructions,
      image, // Assuming you have logic to handle uploaded image
    };

    // Implement logic to send recipe data to your backend API (replace with your actual logic)
    console.log('Submitted recipe:', recipe);
    // ... (API integration logic)

    // Handle successful submission (e.g., reset form, navigate back to recipe list)
    setName('');
    setIngredients([]);
    setInstructions('');
   // setImage(null);
    navigate('/recipes'); // Navigate back to recipe list page
  };

  // Implement functions to handle ingredient changes, instruction changes, and image upload (if applicable)

  return (
    <div className="add-recipe-form">
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Recipe Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="ingredients">Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              value={ingredient}
              //onChange={(e) => handleIngredientChange(e, index)}
            />
            {index > 0 && <button onClick={() => setIngredients(ingredients.slice(0, index))}>Remove</button>}
          </div>
        ))}
        <button type="button" onClick={() => setIngredients([...ingredients, ""])}>
          Add Ingredient
        </button>
        <label htmlFor="instructions">Instructions:</label>
        {/* Add form fields for image upload (if applicable) */}
        <button type="submit">Save Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;