// Home.js
import React from 'react';

import './home.css'; // Import the CSS file
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import back1 from "./cat.png";
import back2 from "./par.png";
import back3 from "./dog1.png";

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content-container">
        <div className='yu'>
        <h1>Welcome to PetAdoption</h1>
        </div>
        <br></br>

        <div className="additional-content">
        <p>"Adopt your furry friends here !!"</p>
          <h2>Why Choose PetAdoption?</h2>
          <p>
            At PetAdoption, we believe in providing loving homes for every pet in need. Our mission
            is to connect pets with caring individuals and families, creating lifelong bonds of
            companionship.
          </p>
          <br></br>

          <h2>How It Works</h2>
          <p>
            Browse through our adorable pets available for adoption. Submit an adoption application,
            and our team will guide you through the process, ensuring a smooth transition for you and
            your new furry friend.
          </p>
        </div>
        <div>
        <img src={back1}  className='img1' alt="asg"/>
       </div> 
        <div>
        <img src={back2}  className='img2' alt="asg"/>
       </div> 
        
      <div>
        <marquee>&copy; 2023 Pet Adoption Center</marquee>
      </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
