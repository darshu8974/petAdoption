import React from 'react';
import './signup.css';

class Signup extends React.Component{
    render(){
        return(
            <div id="back1">
            <div class='well' id="login_box">
                <div id="welcome">
                    <br></br>
                    <h1 id="welcome_txt">Sign Up to</h1><h1 id="title">'Happy Tails'</h1>
                </div>
                <div>

                <h3 id="email_text">Name</h3><br></br>
                    <input type="text" placeholder="Enter your name ..." id="text">
                    </input>

                    <h3 id="email_text">Email</h3><br></br>
                    <input type="email" placeholder="Enter your email ..." id="text" required >
                    </input>

                    <h3 id="email_text">Password</h3><br></br>
                    <input type="password" placeholder="Enter your password ..." id="text"></input>

                    
                    <h3 id="email_text">Confirm Password</h3><br></br>
                    <input type="password" placeholder="Confirm your password ..." id="text"></input>
                    
                    <h3 id="email_text">Enter Age</h3><br></br>
                    <input type="number" placeholder='Enter your age ...' id="age"></input>

                    <h3 id="email_text">Enter Mobile No</h3><br></br>
                    <input type="tel" placeholder='Enter your number ...' id="text"></input><br></br>
                    
                    <h3 id="email_text">Enter Address</h3><br></br>
                    <input type="text" placeholder='Enter your address ...' id="add1"></input>
                    
                    <h3 id="email_text">I accept terms and conditions <input type="checkbox"></input></h3>
                    
                    
                    <br></br><br></br><br></br>

                    <button id="signin_button"><h3>Sign Up</h3></button>
                    
                </div>
            </div>
            </div>
        );
    }
}
export default Signup;


