import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Header.css';
import logo from '../assets/logo1.png';
import SignInForm from './SignInForm';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation hook

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSignIn = () => {
    // Add your sign-in logic here
    closeModal(); // Close the modal
    navigate('/profile'); // Redirect to the profile page
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Paytm" />
        <span>UPI</span>
      </div>
      <nav className="nav">
        <a href="#">Paytm for Consumer</a>
        <a href="#">Paytm for Business</a>
        <a href="#">Investor Relations</a>
        <a href="#">Company</a>
        <a href="#">Careers</a>
      </nav>
      <button className="sign-in" onClick={openModal}>
        Sign In
      </button>
      {isModalOpen && <SignInForm onClose={closeModal} onSignIn={handleSignIn} />}
    </header>
  );
};

export default Header;