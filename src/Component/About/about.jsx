// About.jsx
import React from 'react';
import './about.css';
import aboutImage from './img2.png';
//import ResponsiveAppBar from '../Navbar/navbar';

const About = () => {
  return (
    
    <div className="about-container">
      
      <h1>About Us</h1>
      <br></br><br></br>
      <p>
        Welcome to our pet adoption website! We are passionate about connecting
        loving families with adorable pets. Our mission is to provide a home for
        every pet in need.
      </p>
      <p>
        Whether you are looking to adopt a new furry friend or contribute to our
        cause, we appreciate your support. Together, we can make a difference in
        the lives of these wonderful animals.
      </p>

      <img src={aboutImage} alt="About Us" className="about-image" />
    </div>
  );
};

export default About;
