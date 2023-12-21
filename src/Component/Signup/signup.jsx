import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import { useUser } from '../UserContext/UserContext';

const SignUp = () => {
  const { updateUser } = useUser();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
    setIsFirstNameValid(value.trim() !== '');
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
    setIsLastNameValid(value.trim() !== '');
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(/^\S+@\S+\.\S+$/.test(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 8);
  };

  const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid;

  const handleSignUp = () => {
    if (isFormValid) {
      updateUser(firstName, lastName);
      // Continue with sign-up logic
      // You can make API calls or perform other actions here
    }
  };

  return (
    <section>
      <div className="form-box1">
        <div className="form-value">
          <form action="">
            <h2 className='wel'>Sign up</h2>
            <div className="inputbox">
              <ion-icon name="person-outline"></ion-icon>
              <input
                type="text"
                required
                autoFocus
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <label htmlFor="">First Name</label>
              {!isFirstNameValid && <p className="error-message">Please enter your first name.</p>}
            </div>
            <div className="inputbox">
              <ion-icon name="person-outline"></ion-icon>
              <input
                type="text"
                required
                value={lastName}
                onChange={handleLastNameChange}
              />
              <label htmlFor="">Last Name</label>
              {!isLastNameValid && <p className="error-message">Please enter your last name.</p>}
            </div>
            <div className="inputbox">
              <ion-icon name="mail-outline"></ion-icon>
              <input
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <label htmlFor="">Email</label>
              {!isEmailValid && <p className="error-message">Please enter a valid email address.</p>}
            </div>
            <div className="inputbox">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <input
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <label htmlFor="">Password</label>
              {!isPasswordValid && (
                <p className="error-message">Password must be at least 8 characters long.</p>
              )}
            </div>
            <div className="forget">
              <label htmlFor="">
                <input type="checkbox" id="Rememberme" />
                Remember Me <br />
              </label>
            </div>
            <Link to="/Landing">
              <button className="loginbutton1" disabled={!isFormValid} onClick={handleSignUp}>
                Sign up
              </button>
            </Link>
            <div className="register">
              <p className='sd'>
                Already have an Account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
