
import "../components/css/signup.css"
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { useState } from "react"
import {auth} from '../config/firebase'

function SignIn(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory();

    const signin = (()=>{

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/landingPage")
            alert('Succefully Logged in')
        }).catch((error)=>{
            console.log(error);
            alert('Details not found')
        })


        
    })

    return(
        <div className="signUpMainDiv">
            <div className="contentContainer">
                <h1 className="signUpHeading">Log In With<br></br>Email &<br></br>Password</h1>
                <img className="icon" src="/images/myUserIcon.png"/>
            </div>
            <div className="box2">
                <h1 className="signInHead">SIGN IN</h1>
                <input className="textboxx" type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" /><br></br>
                <input className="textboxx" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" /><br></br>
                <button className="btnLog" onClick={signin}>LOG IN</button><br></br>
                <span className="signInSpan">
                    <Link style={{ color: 'black', }} to="/signup">Create Account</Link>
                </span><br></br>
                <span className="resetSpan">
                    <Link style={{ color: 'black', }} to="/resetPassword">Forgot Password</Link>
                </span>
            </div>
            {/* <div className="frame">
                <h1 className="signUpHeading">SIGN IN</h1>
                <input className="textboxx" type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"/><br></br>
                <input className="textboxx" type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Your Password"/><br></br>
                <button onClick={signin}>SIGN IN</button>
                <span className="signInSpan">
                <Link style={{ color: 'black', }} to="/signup">Create Account</Link>
                </span>
                <span className="passSpan">
                <br></br>
                <Link style={{ color: 'black', }} to="/resetPassword">Forgot Password</Link>
                </span>
            </div> */}

        </div>
    )
}


export default SignIn;