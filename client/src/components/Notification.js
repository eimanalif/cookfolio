import React from 'react';
import './Notification.module.css'; // Import styles

const Notification = ({ message, type }) => {
  const notificationClasses = `notification notification-${type}`;

  const handleCloseNotification = () => {
    // Implement logic to remove notification from state (optional)
  };

  return (
    <div className={notificationClasses + ' animate__animated animate__fadeInUp'}>
      <p>{message}</p>
      <button className="notification__close-btn" onClick={handleCloseNotification}>
        &times;
      </button>
    </div>
  );
};

export default Notification;