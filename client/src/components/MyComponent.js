import React, { useContext } from 'react';
import { NotificationContext } from './components/NotificationContext'; // Adjust path as needed
import Notification from './components/Notification'
import { useState, useEffect } from 'react';

const MyComponent = () => {
  const [ingredients, setIngredients] = useState([]); // Initialize ingredients as an empty array

    useEffect(() => {
        const fetchIngredients = async () => {
            const response = await fetch('/api/ingredients'); // Assuming API endpoint
            const fetchedIngredients = await response.json();
            setIngredients(fetchedIngredients);
        };

        fetchIngredients();
    }, []); // Run effect only once on component mount

    return (
        <div>
            {ingredients.length > 0 ? ( // Check if ingredients exist before rendering
                <ul>
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.id}> {/* Access id only if ingredient exists */}
                            {ingredient.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading ingredients...</p>
            )}
        </div>
    );

  const { notifications, addNotification } = useContext(NotificationContext);

  const handleButtonClick = () => {
    addNotification("Button clicked!", 'success');
  };

  return (
    <div>
      {/* Display notifications using state */}
      {notifications.map((notification) => (
        <Notification key={notification.message} {...notification} />
      ))}
      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  );
};

export default MyComponent;
