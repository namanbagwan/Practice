import React from 'react';
import { useLocation } from 'react-router';

const WelcomeComponent = () => {
    const location = useLocation();
    const { firstname, secondname } = location.state || {};
  
    return (
      <div>
        <h1>Welcome, {firstname} {secondname}!</h1>
        {/* Additional content for the welcome page */}
      </div>
    );
  };

export default WelcomeComponent;