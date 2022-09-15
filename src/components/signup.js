import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import "../components/css/signup.css"
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'

function SignUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    let history = useHistory();

    const signup = ()=> {
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/landingPage")
            alert('successfully Registered')
        }).catch((error)=>{
            console.log(error);
            alert('something went wrong')
        })

    };
    return(
        <div className="signUpMainDiv">
            <div className="contentContainer">
                <h1 className="signUpHeading">Fill In Your<br></br>Details To Register<br></br>Your Account</h1>
                <img className="icon" src="/images/myUserIcon.png"/>
            </div>
            <div className="box2">
                <h1 className="signInHead">REGISTER ACCOUNT</h1>
                <input placeholder="Enter Your Name" className="textboxx" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                <input placeholder="Enter Your Surname" className="textboxx" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                <input placeholder="Enter Your Email" className="textboxx" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                <input placeholder="Enter Your Password" className="textboxx" type="password" onChange={(e) => setPassword(e.target.value)} /><br></br>
                <button className="btnLog" onClick={signup}>REGISTER</button>
                <Link style={{ color: 'black',marginLeft:'60px', marginTop:'10px' }} to="/">Sign In</Link>

            </div>
            {/* <div className="">
                <div className="">
                    <h1 className="">REGISTER ACCOUNT</h1>
                    <input placeholder="Enter Your Name" className="textboxx" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Enter Your Surname" className="textboxx" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Enter Your Email" className="textboxx" type="text" onChange={(e) => setEmail(e.target.value)} /><br></br>
                    <input placeholder="Enter Your Password" className="textboxx" type="password" onChange={(e) => setPassword(e.target.value)} /><br></br>
                    <Link style={{ color: 'black',marginLeft:'200px', marginTop:'10px' }} to="/">Sign In</Link>
                    <br></br>
                    <button className="" onClick={signup}>REGISTER</button>

                </div>
            </div> */}
        </div>
    )
}

export default SignUp;