import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../config/firebase';
import {useParams} from 'react-router-dom'
import { border } from '@mui/system';
import {Link} from 'react-router-dom'



function Description({hotels}){

    console.log('my hotel desc', hotels)

    const [description, setDescrption] = useState([]);
    const {id} = useParams();

    console.log('id', id)
    useEffect(() => {
        const getData = async () => {
            let data = await getDocs(collection(db, "hotels"))
            setDescrption(
                data.docs.map((doc) => (
                    doc.data()
                ))
            )
        }
        getData()

    }, [])
    return(
        <div>
            <div className='descContainer'>
            <h1 className='descHeading'>Room Description</h1>
                 {
                           hotels.filter((item => item.id == id)).map((desc)=> (
                            <div style={{width:"100%", height:"300px",border:"1px solid black"}} className="descColor">
                            <>
                            <img src={desc.image} style={{width:"30%",height:'100%'}}/> 
                               <h1 style={{marginLeft:"30%",marginTop:"-20%",textAlign:"center"}}>{desc.hotelName}</h1>
                               <h1 style={{marginLeft:"32%",marginTop:"1%"}}>{desc.location}</h1>
                               <h4 style={{marginLeft:"32%",}}>{desc.description}</h4>
                               <h4 style={{marginLeft:"32%",marginTop:"-20px"}}>{desc.availableRooms}
                               </h4>
                              <Link to='/bookings' style={{marginLeft:"32%",marginTop:"-1%"}} className="buttonDesc">Book Now</Link> 
                       </>
                         
            
                </div>
                           ))
                 }
            </div>
        </div>
        
    )
}


export default Description;