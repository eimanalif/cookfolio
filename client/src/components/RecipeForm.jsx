import React, { useState } from 'react';

function RecipeForm({ recipes, setRecipes, selectedRecipe }) {
  const [ingredient, setIngredient] = useState(''); // State for the new ingredient

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!ingredient.trim()) {
      alert("Please enter an ingredient name!");
      return;
    }

    try {
      // Update the selected recipe with the new ingredient
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === selectedRecipe.id
            ? { ...recipe, ingredients: [...recipe.ingredients, ingredient] }
            : recipe
        )
      );
      setIngredient(''); // Clear input field after submission
    } catch (error) {
      console.error("Error updating recipes:", error);
      alert("Failed to update recipe. Please try again later.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ingredient">Ingredient:</label>
        <input
          type="text"
          id="ingredient"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button type="submit">Add Ingredient</button>
      </form>
    </div>
  );
}

export default RecipeForm;
