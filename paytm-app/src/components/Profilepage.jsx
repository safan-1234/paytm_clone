import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-section">
        <h2>Welcome, [User Name]</h2>
        <p>Email: user@example.com</p>
      </div>
      <div className="transaction-section">
        <h3>Your Transactions</h3>
        <ul>
          <li>Transaction 1: ₹500</li>
          <li>Transaction 2: ₹1200</li>
          <li>Transaction 3: ₹300</li>
        </ul>
      </div>
      <div className="actions-section">
        <button className="action-btn">Send Money</button>
        <button className="action-btn">Receive Money</button>
      </div>
    </div>
  );
};

export default ProfilePage;