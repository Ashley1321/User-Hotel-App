import { Link } from "react-router-dom";
import "../components/css/services.css"

function Services(){
    return(
        <div className="myMainContent">
            <div className="headbox">
                <div><h1 style={{textAlign:"center",marginTop:"50px"}}>KNOW MORE ABOUT US</h1></div>
                <Link to="/newHomePage" style={{ textDecoration: 'none', backgroundColor: 'black', borderRadius: '5px', color: " gray",textAlign:"center",marginLeft:"40%",marginTop:'100px'}}>#Home</Link>
                <Link to="/services" style={{ textDecoration: 'none', backgroundColor: 'black', borderRadius: '5px', color: " gray",textAlign:"center",marginLeft:"10%",marginTop:'100px'}}>#Services</Link>
            </div>
            <div className="centerContents">
                <h3>A classic beauty fused with modern finishes</h3>
                <p style={{textAlign:"center"}}>Bask in the propertys prime locations<br></br>
                                              and renowned amenities,<br></br>
                                         from the grand courtyard to<br></br>
                                        its popular sea-facing terraces and restaurants.</p>
                <h3 className="bottomHeading">SERVICES AND FACILITIES</h3>
                <img style={{width:"110px",height:'110px',borderRadius:"50%",marginLeft:"-80%"}} src='/images/wifi.png'/>
                <p style={{fontSize:"20px",marginLeft:"-52%",marginTop:"-6%"}}>Available throughout the hotel</p>
                <img style={{width:"110px",height:'110px',borderRadius:"50%",marginLeft:"-20%",marginTop:'3%'}} src='/images/swimming.png'/>
                <p style={{fontSize:"20px",marginLeft:"6%",marginTop:"-8%"}}>Pool, deck and loungers for<br></br>guest use and relaxation.</p>
                <img style={{width:"110px",height:'110px',borderRadius:"50%",marginLeft:"40%",marginTop:'4%'}} src='/images/dinning.png'/>
                <p style={{fontSize:"20px",marginLeft:"66%",marginTop:"-6%"}}>Available from 6:30 - 23:00</p>
            </div>

        </div>
    )
}


export default Services;