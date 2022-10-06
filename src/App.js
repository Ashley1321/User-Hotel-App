
import './App.css';


import ResetPassword from './components/resetPassword';
import Services from './components/services';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Map from './components/map';
import Bookings from './components/bookings';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React,{useState, useEffect} from 'react';
import {collection, getDoc} from 'firebase/firestore';
import MyHomePage from './components/newHomepage';
import LandingPage from './components/landingPage';
import Description from './components/description';
import {  getDocs } from 'firebase/firestore';
import {db} from './config/firebase'
import { async } from '@firebase/util';



function App() {

  

  const [Preview, setPreview] = useState([]);
  useEffect(()=>{
    console.log(Preview);
  },[Preview])

  
  const addPreview = ((_hotels)=>{
    setPreview((hotels)=>[...hotels,
      _hotels
    ])
  })



  const [Payment, setPayment] = useState([]);


  const addBookings = ((names, checkIn, checkOut, numberOfDays, roomNumber, rooms, roomPrice, totalAmount)=>{
    
    setPayment((bookings)=>[...bookings,{
      names: names,
      checkIn: checkIn,
      checkOut: checkOut,
      numberOfDays: numberOfDays,
      roomNumber: roomNumber,
      rooms: rooms,
      roomPrice: roomPrice,
      totalAmount:totalAmount
      

    }])
    console.log(Payment);

  })
 
  const[hotels, setHotels] = useState([]);

  useEffect(()=>{
       const getData = async ()=> {
          let data = await getDocs(collection(db, "hotels"))
          setHotels(data.docs.map((doc)=>(
               {...doc.data(), id:doc.id}
          )))
       }
       getData()
  },[])

  console.log("root hotels",hotels)



  return (
    <Router basename='myHotelApp'>
      <Switch>
        
        <Route exact path="/" component={SignIn}></Route>
        <Route path="/signup" component={SignUp}></Route>
        <Route path="/services" component={Services}></Route>
        <LandingPage path='/landingPage' component={LandingPage}/>
        <Route path="/newHomepage" component={MyHomePage}></Route>
        <Route path="/resetPassword" component={ ResetPassword}></Route>
        <Route path='/description/:id' >
          <Description hotels={hotels}/>
        </Route>
        <Route path='/bookings' component={Bookings}></Route>

      </Switch>
    </Router>
  
  );
}

export default App;
