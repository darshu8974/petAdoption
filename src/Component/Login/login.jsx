// Login.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isEmailValid: true,
      isPasswordValid: true,
      isFormFilled: true,
      isLoginAttempted: false, // Added state for login attempt check
    };
  }

  handleEmailChange = (e) => {
    const newEmail = e.target.value;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    this.setState({
      email: newEmail,
      isEmailValid,
      isFormFilled: true,
    });
  };

  handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const isPasswordValid = newPassword.length >= 6;
    this.setState({
      password: newPassword,
      isPasswordValid,
      isFormFilled: true,
    });
  };

  handleLoginClick = () => {
    const { email, password } = this.state;
    const isFormFilled = email.trim() !== '' && password.trim() !== '';
    const isLoginAttempted = true;

    this.setState({
      isFormFilled,
      isLoginAttempted,
    });

    // Continue with login logic if the form is filled
    if (isFormFilled) {
      // Add your login logic here
    }
  };

  render() {
    const { email, password, isEmailValid, isPasswordValid, isFormFilled, isLoginAttempted } = this.state;

    return (
      <div className='section'>
        <div className='wrapper1'>
          <div id="welcome1">
            <br></br>
            <h1 id="welcome_text1">LOGIN</h1>
            <h1 id="title1"></h1><br></br>
          </div>

          <div className='qqq'>
            <h3 id="email_text1">Email</h3>
            <div className='mailtext'>
              <h4>
                <input
                  type="email"
                  id="text11"
                  required
                  value={email}
                  onChange={this.handleEmailChange}
                  className={isEmailValid ? '' : 'invalid-email'}
                />
              </h4>
              {isLoginAttempted && !isFormFilled && email.trim() === '' && (
                <p className='error-message'>Please fill in the email.</p>
              )}
              {isEmailValid ? null : (
                <p className='error-message'>Enter a valid email address.</p>
              )}
            </div>
            <br></br>

            <h3 id="password_text1">Password</h3>
            <input
              type="password"
              id="text22"
              required
              value={password}
              onChange={this.handlePasswordChange}
              className={isPasswordValid ? '' : 'invalid-password'}
            />
            {isLoginAttempted && !isFormFilled && password.trim() === '' && (
              <p className='error-message'>Please fill in the password.</p>
            )}
            {isPasswordValid ? null : (
              <p className='error-message'>Password must be at least 6 characters long.</p>
            )}
            <br></br><br></br><br></br>

            <div className='rm'>
              <label htmlFor='check'><input type='checkbox' id='check'></input>Remember Password</label>
            </div>
            <br></br>

            <div className='btn'>
              <Link to='/Home'>
                <button
                  id='loginbutton1'
                  disabled={!isEmailValid || !isPasswordValid || !isFormFilled}
                  onClick={this.handleLoginClick}
                >
                  LOGIN
                </button>
              </Link>
            </div>
            <br></br><br></br><br></br>

            <hr className='hr'></hr>
            <br></br>
            <h3 id="sign_msg1">or </h3>
            <br></br>
            <h3>
              <Link to='/Signup' style={{textDecoration: "none"}}>
                <h3 className='signuplink'>Sign Up</h3>
              </Link>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
