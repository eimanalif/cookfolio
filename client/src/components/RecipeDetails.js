import { useState, useEffect } from 'react';

const RecipeDetails = ({ selectedRecipeId }) => {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(`/api/recipes/${selectedRecipeId}`); // Assuming API endpoint
            const fetchedRecipe = await response.json();
            setRecipe(fetchedRecipe);
        };

        if (selectedRecipeId) { // Fetch only if ID exists
            fetchRecipe();
        }
    }, [selectedRecipeId]); // Re-fetch on ID change

    return (
        <div>
            {recipe ? (
                <>
                    <h2>{recipe.title}</h2>
                    <p>ID: {recipe.id}</p>
                    {/* Render other recipe details */}
                </>
            ) : (
                <p>Loading recipe details...</p>
            )}
        </div>
    );
};

export default RecipeDetails;