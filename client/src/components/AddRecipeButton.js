import React from 'react';

const AddRecipeButton = ({ onClick }) => {
  return (
    <button className="add-recipe-button" onClick={onClick}>
      Add Recipe
    </button>
  );
};

export default AddRecipeButton;