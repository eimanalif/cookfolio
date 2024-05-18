import React, { useState } from 'react';

const AddRecipe = ({ onAddRecipe }) => {
  const [newRecipe, setNewRecipe] = useState({
    name: '',
    ingredients: [''],
    instructions: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const handleIngredientChange = (index, event) => {
    const updatedIngredients = [...newRecipe.ingredients];
    updatedIngredients[index] = event.target.value;
    setNewRecipe({ ...newRecipe, ingredients: updatedIngredients });
  };

  const handleAddIngredient = () => {
    setNewRecipe({ ...newRecipe, ingredients: [...newRecipe.ingredients, ''] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newRecipe.name.trim() && newRecipe.ingredients.every(ingredient => ingredient.trim())) {
      onAddRecipe(newRecipe);
      setNewRecipe({ name: '', ingredients: [''], instructions: '' });
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          name="name"
          id="name"
          value={newRecipe.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Ingredients</label>
        {newRecipe.ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              value={ingredient}
              onChange={(event) => handleIngredientChange(index, event)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
      </div>
      <div>
        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save Recipe</button>
    </form>
  );
};

export default AddRecipe;
