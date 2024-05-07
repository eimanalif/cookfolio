import React from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation

const AddRecipeButton = ({ onClick }) => {
  // eslint-disable-next-line
  const navigate = useNavigate();

  const handleClick = () => {
    // Call the onClick prop handler (likely for navigation)
    onClick();

    // Optional: You can also navigate to the add recipe route here
    // navigate('/add-recipe');
  };

  return (
    <button className="add-recipe-button" onClick={handleClick}>
      Add Recipe
    </button>
  );
};

export default AddRecipeButton;