
import React from "react";
import "../components/css/displayPreview.css"
import { Link } from 'react-router-dom';

function DisplayHotels(props){
    return(
        <div>
            {props.list.map((display,hotels)=>(
                <div key={hotels} className='preview'>
                     <h1 className='Ph'>PREVIEW</h1>

                     <div className="divPreview"><h2>{display.Name}</h2></div>

                     <div className="divPreview"><h3>{display.Location}</h3></div>

                     <div className="divPreview"><h4>{display.Rating}</h4></div>

                     <div className="divPreview"><h5>{display.Distance}</h5></div>

                     <div className="divPrice"><Link style={{color:'white', textDecoration:'none',fontWeight:'bold'}} to='/bookings'>{display.Price}</Link></div>

                     <div className="picture"><h3>{display.Image}</h3></div>
                    
                </div>
                

            ))}
            

        </div>
    )
}

export default DisplayHotels;