import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';
import back1 from "./twitt2.png";
import back2 from "./instagram.png";
import back3 from "./reddit.png";
import back4 from "./facebook.png";
import back5 from "./logo.ico";

const Welcome = () => {
  useEffect(() => {
    document.body.classList.add('welcome-page');

    return () => {
      document.body.classList.remove('welcome-page');
    };
  }, []);

  return (
    <div className="welcome-container">
      <header>
        <div className="auth-buttons">
          <Link to="/Login"><button>Login</button></Link> 
          <Link to="/Signup"><button>Sign Up</button></Link>
        </div>
        <h1 className='title1'> <img src={back5}  className='imgg5' alt="asgrr"/>happyTails</h1>
        
          <h1 id='headdd'>Pet Adoption</h1>
          

        <h3><p className='pos'> Adopt a pet and make a house a home.</p></h3>
        <br></br>
      </header>
      <main>
        <h3><p className='pos2'>Find your furry friend, and let the adventure begin...</p></h3>
      </main>
      <br></br><br></br><br></br>
      <hr></hr>

      {/* <marquee >
      <p className='foot'>&copy; 2023 Pet Adoption Center</p>
      <p className='foot'>&copy; 2023 Pet Adoption Center</p>
      <p className='foot'>&copy; 2023 Pet Adoption Center</p>
      </marquee> */}
      <br></br><br></br><br></br>
      <div className='ui'>
        <marquee >
          Made by @Darshan
        </marquee>
        </div> 
      
      
    </div>
  );
};

export default Welcome;
