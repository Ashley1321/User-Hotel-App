import React from "react";
import { Link } from "react-router-dom";
import '../components/css/landing.css'



function LandingPage(){
    return(
        <div className="topDiv">
            <div className="MyContents">
                <p className="Logo">Hotel Heaven</p>
                <p className="logo2">D i v e & D i n e</p>
                <img className='image' src='/images/reservation.png'/>
                <p className="res">Reservation</p>
                <img className='imagee' src='/images/tel.png'/>
                <p className="tel">015 189 2124</p>
                <img className='mainIMG' src='/images/whiteBackground.webp'/>
                <p className="Headings">Discover Deals<br></br>
                hotels & <br></br>
                Resorts</p> 
                <Link to='/newHomePage' style={{background:'Black',padding:'15px',textDecoration:'none',color:'white',marginLeft:'16%'}}>Explore Rooms</Link>
                <div className="blue">
                <img className='subIMG' src='/images/couch.webp'/>
                </div>
                <h2 style={{marginLeft:'55%', marginTop:'-250px', fontFamily:'forum'}}>Stay Longer, Save More</h2>
                <p style={{marginLeft:'55%', marginTop:'10px', fontFamily:'forum'}}>Visit Site for a long stay as long as you<br></br>
                    wish, the longer you stay, the more<br></br>
                    you save!</p>
                <p style={{marginLeft:'55%', marginTop:'10px', fontFamily:'forum'}}>Savor something tasty at the Restaurants,<br></br>
                    bars and poolsides</p>
                
            </div>
        </div>
    )
}

export default LandingPage;