//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation (if needed)
import Header from './components/Header'; // Assuming Header.js exists in components folder
import RecipeList from './components/RecipeList';
import AddRecipeButton from './components/AddRecipeButton';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipe from './components/AddRecipe'; // Import AddRecipe component

function App() {
  // Decide how to use handleAddRecipeClick (navigation or other logic)
  const handleAddRecipeClick = () => {
    console.log('Add recipe button clicked!');
    // You can use navigate('/add-recipe') here if needed
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
        <AddRecipeButton onClick={handleAddRecipeClick} />
      </div>
    </BrowserRouter>
  );

  return (
    <div className="App">
      <h1>Cookfolio</h1>
      <RecipeList /> {/* Add RecipeList component */}
      <AddRecipeButton onClick={handleAddRecipeClick} />
    </div>
  );
}

//function App() {
  //return (
    //<div className="App">
   //   <header className="App-header">
      //  <img src={logo} className="App-logo" alt="logo" />
        //<p>
      //    Edit <code>src/App.js</code> and save to reload.
       // </p>
      //  <a
          //className="App-link"
         // href="https://reactjs.org"
        //  target="_blank"
        //  rel="noopener noreferrer"
      //  >
       //   Learn React
      //  </a>
    //  </header>
   // </div>
  //);
//}

export default App;
