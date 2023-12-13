import React from 'react';
import './welcome.css';

class Welcome extends React.Component{
    render(){
        return(
            <><><div className="l1">
                <h3 class="title1">Pet</h3>
                <h3 class="title">Adoption</h3>
            </div>
                <div className="l2">
                    <p>⁓ Help save someone’s new best friend ⁓ </p>
                </div></>
                <div className='l3'>
                    <p>⁓ Rescue, love, care and repeat ⁓ </p>
                    <br></br>
                </div>

            <div class="container">
             <div>
             <button class="log">Login</button>

             <button class="reg">Sign up</button>
             
            </div>
            </div></>

        );
    }
}

export default Welcome;