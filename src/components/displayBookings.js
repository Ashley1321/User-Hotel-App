// import "../components/css/displayBookings.css"
// import React,{useState} from "react";
// import {Link} from 'react-router-dom'

// function DisplayBookings(props){
//     const [search, setSearch] = useState('');

//     return(
//         <div>
//             {props.list.map((bookings )=>(
//                 <div className="boxClass">
//                       <h2 className="bookingInfo">BOOKING INFORMATION</h2>

//                       <div className="displayDivs"><h3>Your name is:{bookings.names}</h3><br></br></div>

//                       <div className="displayDivs"><h3>Check-In date is:{bookings.checkIn}</h3><br></br></div>

//                       <div className="displayDivs"><h3>Check-Out date is:{bookings.checkOut}</h3><br></br></div>

//                       <div className="displayDivs"><h3>Number of days:{bookings.numberOfDays}</h3><br></br></div>

//                       <div className="displayDivs"><h3>Your Room number is:{bookings.roomNumber}</h3><br></br></div>

//                       <div className="displayDivs"><h3>Hotel Name:{bookings.rooms}</h3><br></br></div>

//                       <div className="displayDivs"><h3>Room Price:R{bookings.roomPrice}</h3><br></br></div>

//                       <div className="displayDivs"><h3>Total Amount Due:{bookings.numberOfDays*bookings.roomPrice}</h3><br></br></div>
            
//                 </div>
                 
//             ))} 
//              {/* { <div className="searchOutput">
//                 {
//                     props.hotelArray.filter((res)=>{
//                         if (res.place.toLowerCase().includes(search.toLocaleLowerCase())){
//                             return(res);

//                         }else {
//                             if (search == ''){
//                                 return(res);
//                             }
//                         }
//                         console.log('testing array', props.hotelArray)
//                     })
                    
//                     .map((res,index )=>(
//                         <div>
//                             <div>
//                                 <Link to={`hotelArray/${res.Price}`}>
//                                     {res.HotelName}
//                                 </Link>
//                             </div>
//                         </div>
//                     ))
//                 }

//             </div> }   */}
//         </div>
//     )
// }

// export default DisplayBookings;