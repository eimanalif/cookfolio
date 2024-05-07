import React, { useState } from 'react';

const AddRecipeForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null); // For image upload

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare recipe data object
    const recipe = {
      name,
      ingredients,
      instructions,
      image, // Assuming you have logic to handle uploaded image
    };

    // Call the onSubmit function passed as a prop
    // This function likely handles form submission logic (validation, sending data to backend)
    onSubmit(recipe);

    // Reset form state after submission (optional)
    setName('');
    setIngredients([]);
    setInstructions('');
    setImage(null);
  };

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...ingredients];
    if (index === ingredients.length) {
      // Adding a new ingredient
      newIngredients.push(event.target.value);
    } else {
      // Editing an existing ingredient
      newIngredients[index] = event.target.value;
    }
    setIngredients(newIngredients);
  };

  const handleInstructionChange = (event) => {
    setInstructions(event.target.value);
  };

  // Add functions to handle image upload (if applicable)

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
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
            onChange={(e) => handleIngredientChange(e, index)}
          />
          {index > 0 && <button onClick={() => setIngredients(ingredients.slice(0, index))}>Remove</button>}
        </div>
      ))}
      <button type="button" onClick={() => setIngredients([...ingredients, ""])}>
        Add Ingredient
      </button>
      <label htmlFor="instructions">Instructions:</label>
      <textarea id="instructions" value={instructions} onChange={handleInstructionChange} required />
      {/* Add form fields for image upload (if applicable) */}
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default AddRecipeForm;