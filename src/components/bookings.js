// import { Link } from "react-router-dom"
// import "../components/css/bookings.css"
// import React,{useState} from "react";
// import {db} from '../config/firebase'
// import {addDoc, collection} from 'firebase/firestore'


// function Bookings(props){

//     const [names, setNames] = useState('');
//     const [checkIn, setCheckIn] = useState('');
//     const [checkOut, setCheckOut] = useState('');
//     const [numberOfDays, setNumberOfDays] = useState('');
//     const [roomNumber, setRoomNumber] = useState('');
//     const [rooms, setRooms] = useState('');
//     const [roomPrice, setRoomPrice] = useState('');
//     const [totalAmount, setTotalAmount] = useState('');
//     const [search, setSearch] = useState('');

//     const booking=(()=>{

//         const collectionRef = collection( db, "bookings");

//         const bookings = {
//             names:names,
//             checkIn: checkIn,
//             checkOut: checkOut,
//             roomNumber: roomNumber,
//             roomPrice: roomPrice,
//             numberOfDays: numberOfDays,
//             totalAmount: numberOfDays*roomPrice
//         };

//         addDoc(collectionRef, bookings).then(()=>{
//             alert("Successfully Booked")
//         }).catch((err)=>{
//             console.log(err);
//             alert("Unsuccessful Booking")
//         })

//         console.log(names);

//         props.book(names, checkIn, checkOut, numberOfDays, roomNumber, rooms, roomPrice,totalAmount);
//        console.log('information', props.book)
//     })
   

//     return(
//         <div className="mainDiv">
//             <div className="headDiv">
//                 <div className="mySearch">
//                     <input onChange={(e)=>setSearch(e.target.value)} className="searchBar" type='text' placeholder='Search Hotel by Location' />
//                     <img src="/images/Search.png" className="searchPic"/>
//                     <span className="Sort">SORT BY</span>
//                     <select className="comboBox">
//                         <option></option>
//                         <option value="Rating">Rating</option>
//                         <option value="Price">Price</option>
//                         <option value="Location">Location</option>
//                         <option value="Distance">Distance</option>
//                     </select>
//                     <span className="homeLink" ><Link style={{ color: 'white' }}to='/homepage'>Home</Link></span>
//                     <span className="exploreLink"><Link style={{ color: 'white' }} to='/explore'>Explore</Link></span>
//                     <span className="servicesLink"><Link style={{ color: 'white' }} to='/services'>AboutUs</Link></span>
//                 </div>
                
//             </div>
//             <div className="searchResults">
//                 <h2 className="searchResultsHeading">Search Results</h2>
//                 <h4 style={{color:'lime',textAlign:'center'}}>Recommended Hotels</h4>
//                 {/* first Row */}
//                 <div className="firstHotel">
//                 <img src="/images/sandton-sun.jpg" style={{width:'180px'}}/>
//                 <h2 style={{color:'white',position:'absolute',left:'200px',top:'5px'}}>Sandton Sun Hotel</h2>
//                 <h5 style={{color:'white',position:'absolute',left:'200px',top:'50px'}}>5 star rating</h5>
//                 <h5 style={{color:'white',position:'absolute',left:'200px',top:'85px'}}>Excellent Service</h5>
//                 <h6 style={{color:'white',position:'absolute',left:'1085px',top:'15px'}}>Pay at the property</h6>
//                 <button style={{position: 'absolute',width: '150px',left:'865px',top:'40px',color:'lime',border:'none'}} onClick={()=>alert('Fill in your details below to book!')}>R2800</button>

//                 </div>

//                 {/* second Row */}
//                 <div className="secondHotel">
//                 <img src="/images/PAVILION.jpg" style={{width:'180px'}}/>
//                 <h2 style={{color:'white',position:'absolute',left:'200px',top:'5px'}}>The Pavilion Hotel</h2>
//                 <h5 style={{color:'white',position:'absolute',left:'200px',top:'50px'}}>5 star rating</h5>
//                 <h5 style={{color:'white',position:'absolute',left:'200px',top:'85px'}}>Excellent Service</h5>
//                 <h6 style={{color:'white',position:'absolute',left:'1085px',top:'15px'}}>Pay at the property</h6>
//                 <button style={{position: 'absolute',width: '150px',left:'865px',top:'40px',color:'lime',border:'none'}} onClick={()=>alert('Fill in your details below to book!')}>R2800</button>
//                 </div>
                

//                 {/* third div */}
//                 <div className="thirdHotel">
//                 <img id="image" src="/images/CONSTANTIA.jpg" style={{width:'180px'}}/>
//                 <h2 style={{color:'white',position:'absolute',left:'200px',top:'5px'}}>The Constantia Hotel</h2>
//                 <h5 style={{color:'white',position:'absolute',left:'200px',top:'50px'}}>5 star rating</h5>
//                 <h5 style={{color:'white',position:'absolute',left:'200px',top:'85px'}}>Excellent Service</h5>
//                 <h6 style={{color:'white',position:'absolute',left:'1085px',top:'15px'}}>Pay at the property</h6>
//                 <button style={{position: 'absolute',width: '150px',left:'865px',top:'40px',color:'red',border:'none'}} onClick={()=>alert('Room Unavailable')}>R2800</button>

//                 </div>
//             </div>
//             <div className="Map">
//             <img  src="/images/map.png" className="myMap" alt="dining room"/>
//             </div>
//             <div>
//                 <h2 className="inputsheading">GUEST INFORMATION</h2>
//                 <input type="text" className="text1" onChange={(e)=>setNames(e.target.value)} placeholder="Enter Your Full Names"/>
//                 <span className="dateSpan">Check-In date</span>
//                 <input type="date" className="date" onChange={(e)=>setCheckIn(e.target.value)} placeholder="Enter Check-In date"/>
//                 <span className="outDate">Check-Out Date</span>
//                 <input type="date" className="date2" onChange={(e)=>setCheckOut(e.target.value)} placeholder="Enter Check-Out date"/>
//                 <input type="text" className="text2" onChange={(e)=>setNumberOfDays(e.target.value)} placeholder="Enter Number of Days"/>

//                 <h2 className="inputheading">ROOM INFORMATION</h2>
//                 <input type="text" className="text4" onChange={(e)=>setRooms(e.target.value)} placeholder="Enter Hotel Name"/>
//                 <input type="text" className="text3" onChange={(e)=>setRoomNumber(e.target.value)} placeholder="Enter Room Number"/>
//                 <input type="text" className="text5" onChange={(e)=>setRoomPrice(e.target.value)} placeholder="Enter Room Price"/>
//                 <input type="text" className="text6" onChange={(e)=>setTotalAmount(e.target.value)} placeholder="Leave Blank"/>
//                 <button className="Button" id="submit"  onClick={booking}>SUBMIT</button>
//             </div>
//             <div className="boxClass"> 
           
//             </div>
//             {/* <div className="searchOutput">
//                 {
//                     props.list.filter((booking)=>{
//                         if (booking.place.toLowerCase().includes(search.toLocaleLowerCase())){
//                             return(booking);

//                         }else {
//                             if (search == ''){
//                                 return(booking);
//                             }
//                         }
//                     })
//                     .map((booking,index )=>(
//                         <div>
//                             <div>
//                                 <Link to={`list/${booking.Price}`}>
//                                     {booking.HotelName}
//                                 </Link>
//                             </div>
//                         </div>
//                     ))
//                 }

//             </div>  */}
            
            

//         </div>
//     )
// }



// export default Bookings;



