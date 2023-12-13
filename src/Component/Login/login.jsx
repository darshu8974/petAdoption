import React , {useState} from 'react';
import myImage from './instagram.png';
import myImage1 from './reddit.png';
import myImage2 from './twitt.png';
import myImage3 from './facebook.png';
import './login.css';
//import { Link } from 'react-router-dom';

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => {setEmail(e.target.value);};

  const handlePasswordChange = (e) => {setPassword(e.target.value);};

  const handleSubmit = (e) => 
  {
    console.log('Email:', email, 'Password:', password);
  };
        return(
            <div id="back1">
            <div class='well' id="login_box">
                <div id="welcome">
                    <br></br>
                    <h1 id="welcome_txt">Welcome to</h1><h1 id="title">Happy Tails</h1>
                </div>

                <div>
                    <h3 id="email_text">
                        Email
                    </h3>
                    <input type="email"  placeholder="Enter your email ..." id="text" value={email} onChange={handleEmailChange} autoFocus required>
                </input><br></br>


                    <h3 id="password_text">
                        Password
                    </h3>
                    <input type="password" placeholder="Enter your password ..." id="text" maxLength={8} value={password} onChange={handlePasswordChange}>
                    </input>


                    <h4 id="forgot_pass">Forgot your password?</h4>


                    <button id="login_button"><h3>Login</h3></button><br></br><br></br>
                    <hr></hr>


                    <h4 id="sign_msg">Or try Signing in </h4>


                  <button class="signin_button"><h3>
                        Signup </h3></button>
  
                  
                        <div>
                        
                       <p id="new">Follow us on </p>
                       
                       <img src={myImage} alt="" />
                       <img src={myImage1} alt="" />
                       <img src={myImage2} alt="" />
                       <img src={myImage3} alt="" />
                      </div>                        
                </div>
            </div>
            </div>
        );
}
export default Login;


