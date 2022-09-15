
import "../components/css/signup.css"
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../config/firebase'
import { useState } from "react";
import {sendPasswordResetEmail } from "firebase/auth";


function ResetPassword(){
    let history = useHistory('');


    const [email,setEmail] = useState('');
    

    const resetPassword = (()=>{
        sendPasswordResetEmail(auth, email).then(() => {
                    history.push("/landingPage")
                    alert('Check your emails for varification')
                   
               }).catch((error) => {
                    console.log(error);
                    alert('something went wrong')
                });

                //material core
                
    })

    return(
        <div className="signUpMainDiv">
            <div className="contentContainer">
                <h1 className="signUpHeading">Enter Email <br></br>Linked With Account To <br></br>Your Get Reset Link</h1>
                <img className="icon" src="/images/myUserIcon.png"/>
            </div>
            <div className="box2">
                <h1 className="signInHead">RESET PASSWORD</h1>
                <input className="textboxx" type="Email" onClick={(e)=>setEmail(e.target.value)} placeholder="Enter Email Linked with Account"/><br></br>
                <button className="btnLog" onClick={resetPassword}>RESET</button>
                <Link style={{ color: 'black',marginLeft:'60px' }} to="/">Sign In</Link>
            </div>

        </div>
    )
}


export default ResetPassword;