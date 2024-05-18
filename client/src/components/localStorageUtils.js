// localStorageUtils.js
export const loadRecipes = () => {
    const recipes = localStorage.getItem('recipes');
    return recipes ? JSON.parse(recipes) : [];
  };
  
  export const saveRecipes = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  };
  