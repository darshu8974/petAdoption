import './App.css';
import React from 'react';
import Welcome from './Component/Welcome/welcome';
import Login from './Component/Login/login';
import Signup from './Component/Signup/signup';

import About from './Component/About/about';
import Landing from './Component/Landing/landing'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider, useUser } from './Component/UserContext/UserContext';

import Home from './Component/Home/home';
import PrivacyPage from './Component/Footer/privacy';
import ContactPage from './Component/Footer/contact';
import TermsPage from './Component/Footer/terms';
import Pets from './Component/Pets/pets';
import Accessories from './Component/Accessories/accessories';
import Food from './Component/Food/food';
import Medicine from './Component/Medicine/medicine';
import Payment from './Component/Payment/payment';


function App() {
  const { userName } = useUser();
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <div>
            
            <Routes>
              <Route path="/" element={<Welcome userName={userName} />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Home" element={<Home/>}/>
              <Route path="/Landing" element={<Landing />} /> 
              <Route path="/About" element={<About />} />
              <Route path="/Pets" element={<Pets/>}/>
              <Route path="/Privacy" element={<PrivacyPage/>}/>
              <Route path="/Contact" element={<ContactPage/>}/>
              <Route path="/terms" element={<TermsPage/>}/>
              <Route path="/Accessories" element={<Accessories/>}/>
              <Route path="/Food" element={<Food/>}/>
              <Route path="/Medicine" element={<Medicine/>}/>
              <Route path="/Payment" element={<Payment/>}/>
            </Routes>
          </div>
        </UserProvider>
      </Router>
      
    </div>
  );
}

export default App;
