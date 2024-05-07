import React, { useState } from 'react';
import styles from './Header.module.css'; // Import CSS

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // You can implement logic to filter recipes based on searchTerm in your RecipeList component
  };

  return (
    <header className={styles.AppHeader}>
      <img src="logo.png" alt="Cookfolio Logo" />
      <h1>Cookfolio</h1>
      <input
        type="text"
        placeholder="Search Recipes"
        className={styles.SearchInput}
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </header>
  );
};

export default Header;
