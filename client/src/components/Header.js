import React, { useState } from 'react';
import styles from './Header.module.css'; // Import CSS

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Pass the search term to the parent component
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="logo.png" alt="Cookfolio Logo" className={styles.logo} />
        <h1 className={styles.title}>Cookfolio</h1>
      </div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
    </header>
  );
};

export default Header;
