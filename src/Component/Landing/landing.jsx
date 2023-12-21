// Landing.jsx
import React from 'react';
import { useUser } from '../UserContext/UserContext.jsx';
import { Link } from 'react-router-dom';
import './landing.css';
import Navbar from '../Navbar/navbar.jsx';

const Landing = () => {
  const { user } = useUser();

  return (
    <div className='bac'>
      <Navbar></Navbar>
      <h1 style={{ color: 'black' }}>Welcome , {user.firstName} {user.lastName}</h1>
      <br></br>
      <Link to ="/Home"><button className='lan_but'>Explore</button></Link>
    </div>
  );
};

export default Landing;
