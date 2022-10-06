import { Link } from "react-router-dom"
import "../components/css/bookings.css"
import React,{useState} from "react";
import {db} from '../config/firebase'
import {addDoc, collection} from 'firebase/firestore'


function Bookings(props){

    const [names, setNames] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [numberOfDays, setNumberOfDays] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [rooms, setRooms] = useState('');
    const [roomPrice, setRoomPrice] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    

    const booking=(()=>{

        const collectionRef = collection( db, "bookings");

        const bookings = {
            names:names,
            checkIn: checkIn,
            checkOut: checkOut,
            roomNumber: roomNumber,
            roomPrice: roomPrice,
            numberOfDays: numberOfDays,
            totalAmount: numberOfDays*roomPrice
        };

        addDoc(collectionRef, bookings).then(()=>{
            alert("Successfully Booked")
        }).catch((err)=>{
            console.log(err);
            alert("Unsuccessful Booking")
        })

        console.log(names);

        props.book(names, checkIn, checkOut, numberOfDays, roomNumber, rooms, roomPrice,totalAmount);
       console.log('information', props.book)
    })
   

    return(
        <div className="mainDiv">
          
            <div>
                <h1 style={{color:'color',justifyContent:'center'}}>GUEST INFORMATION</h1>
                <input type="text" className="text" onChange={(e)=>setNames(e.target.value)} placeholder="Enter Your Full Names"/><br></br>
                <span className="dateSpan">Check-In date</span><br></br>
                <input type="date" className="text" onChange={(e)=>setCheckIn(e.target.value)} placeholder="Enter Check-In date"/><br></br>
                <span className="outDate">Check-Out Date</span><br></br>
                <input type="date" className="text" onChange={(e)=>setCheckOut(e.target.value)} placeholder="Enter Check-Out date"/><br></br><br></br>
                <input type="text" className="text" onChange={(e)=>setNumberOfDays(e.target.value)} placeholder="Enter Number of Days"/><br></br>

                <h1 className="inputheading">ROOM INFORMATION</h1>
                <input type="text" className="text" onChange={(e)=>setRooms(e.target.value)} placeholder="Enter Hotel Name"/><br></br><br></br>
                <input type="text" className="text" onChange={(e)=>setRoomNumber(e.target.value)} placeholder="Enter Room Number"/><br></br><br></br>
                <input type="text" className="text" onChange={(e)=>setRoomPrice(e.target.value)} placeholder="Enter Room Price"/><br></br>
                <input type="text" className="text1" onChange={(e)=>setTotalAmount(e.target.value)} placeholder="Leave Blank"/><br></br>
                <button className="Button" id="submit"  onClick={booking}>SUBMIT</button><br></br><br></br>
                <Link to='/newHomepage'><button className="Button" style={{textDecoration:"none"}}>BACK</button></Link>
            </div>
            
        </div>
    )
}



export default Bookings;



