import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import "../App.css";

function LogInForm() {
    const [firstname, setFirstName] = useState('');
    const [secondname, setSecondName] = useState('');
    const [lastname, setLastName] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate(); // Get the navigate function from React Router

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleSecondNameChange = (event) => {
        setSecondName(event.target.value);
    }

    const inputevent = (event) => {
        event.preventDefault();
      
        const trimmedFirstName = firstname.trim().toLowerCase();
        const trimmedSecondName = secondname.trim().toLowerCase();
      
        if (trimmedFirstName === '' || trimmedSecondName === '') {
          setError('Please enter valid names in both fields');
        } else if (trimmedFirstName.length <= 3 || trimmedSecondName.length <= 3) {
          setError('Names should be more than 3 characters');
        } else if (trimmedFirstName !== trimmedSecondName) {
          setError('Names should be the same');
        } else {
          // Pass firstname and secondname as props when navigating to the Welcome component
          navigate('/welcome', { state: { firstname, secondname } });
        }
      };

    return (
        <div className="login-form-container">
            <div className="login-form-content">
                <h1>Hello {lastname}</h1>
                <form onSubmit={inputevent}>
                    <div className="input-container">
                        <input
                            type='text'
                            placeholder='Enter first name'
                            onChange={handleFirstNameChange}
                            value={firstname}
                        />
                        <input
                            type='text'
                            placeholder='Enter second name'
                            onChange={handleSecondNameChange}
                            value={secondname}
                        />
                    </div>
                    <button type='submit'>Click Me</button>
                </form>
                {error && <p className="error-message">{error}</p>}
            </div>
        </div>
    )
}

export default LogInForm;
