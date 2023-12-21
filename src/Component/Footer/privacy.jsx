// privacy.jsx
import React from 'react';
import './privacy.css';

const PrivacyPage = () => {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p>
        Welcome to Happy Tails, your trusted partner in pet adoption. This Privacy Policy
        outlines how we collect, use, and protect your personal information when you use our
        services. By using Happy Tails, you agree to the terms and practices described in this
        policy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        Happy Tails may collect personal information when you register on our site, fill out an
        adoption application, or engage with our services. This information may include your name,
        email address, contact information, and other relevant details.
      </p>

      {/* Add more sections as needed */}

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about our Privacy Policy, please feel free to contact
        us at privacy@happytails.com.
      </p>
    </div>
  );
};

export default PrivacyPage;
