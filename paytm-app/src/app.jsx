import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SignInForm from './components/SignInForm';



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SignInForm />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
