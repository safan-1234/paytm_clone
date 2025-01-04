import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignInForm.css';

const SignInForm = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation/authentication here
    navigate('/profile'); // Navigate to the Profile Page
  };

  return (
    <div className="sign-in-modal">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="submit-btn">Sign In</button>
        <button type="button" className="close-btn" onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
