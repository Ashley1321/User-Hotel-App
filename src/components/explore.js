

import { Link } from 'react-router-dom';
import '../components/css/explore.css'
import React,{ useState,useEffect } from 'react';
import {collection,getDocs} from 'firebase/firestore'
import {db} from '../config/firebase'

function Explore(props){

    const[myHotels,setMyHotels] = useState([]);

      useEffect(()=>{
        const getData = async ()=>{
            let data = await getDocs(collection(db,"hotels"))
            setMyHotels(
                data.docs.map((doc)=>(
                    doc.data()
                ))
            )
        }
          getData()
       
      },[])
      console.log('myHotels',myHotels)
    const DisplayPreview = (hotels)=> {
       props.DisplayPreview(hotels);
    }
    
    return(
        <div className='MajorDiv'>
            <div className='myHeaderDiv'>
               Look for the most LAXURIOUS hotels in South Africa
            </div>

            

        </div>
        // <div className="MainDiv2">
        //     <div className="headerBox">
        //         <h1 className='mainHeading'>EXPLORE THE MOST LAXURIOUS HOTELS IN SA</h1>
        //         <span className='linkHome'><Link style={{ color: 'white' }} to="/homepage">Home</Link></span>
        //         <span className='linkAbout'><Link style={{ color: 'white' }} to="/services">About Us</Link></span>
        //         <span className='linkBook'><Link style={{ color: 'white' }} to="/bookings">Book</Link></span>
    
        //     </div>

        //     <div className='body'>
               
        //         {/* <h5 className='click'>CLICK IMAGE TO PREVIEW</h5> */}
        //         {
        //             myHotels.map((data)=>{
        //                 <h1 className='place'>{data.location}</h1>
        //             })
        //         }

        //         <img className="picture11" onClick={()=>DisplayPreview({Name:"CONSTANTIA HOTEL", Rating:"5 star", Price:"R1 6000", Location:"CAPE TOWN",Distance:"2.4KM to City Center",Image:<img className='rightImages' src='/images/CONSTANTIA.jpg'/>})}  src='/images/CONSTANTIA.jpg' placeholder=''/>
        //         <img className="picture22" onClick={()=>DisplayPreview({Name:"THE FOUNTAINS HOTEL", Rating:"5 star", Price:"R1 300", Location:"CAPE TOWN",Distance:"4.7KM to City Center",Image:<img className='rightImages' src='/images/CAMISA.jpg'/>})} src='/images/CAMISA.jpg' placeholder=''/>
        //         <img className="picture33" onClick={()=>DisplayPreview({Name:"THE TABLE BAY HOTEL", Rating:"5 star", Price:"R1 000", Location:" CAPE TOWN",Distance:"3.6KM to City Center",Image:<img className='rightImages' src='/images/FRONT 2.jpg'/>})} src='/images/FRONT 2.jpg' placeholder=''/>

        //         <h1 className='place2'>SANDTON</h1>
        //         <img className="picture44" onClick={()=>DisplayPreview({Name:"LA MOISEN LOFTS HOTEL", Rating:"5 star", Price:"R2 000", Location:"SANDTON",Distance:"1.6KM to City Center",Image:<src='/images/sandton-sun.jpg'img className='rightImages' src='/images/PTA.jpg'/>})} src='/images/PTA.jpg' placeholder=''/>
        //         <img className="picture55" onClick={()=>DisplayPreview({Name:"MONTE LA VUE BAY HOTEL", Rating:"5 star", Price:"R2 300", Location:"SANDTON",Distance:"4.6KM to City Center",Image:<img className='rightImages' src='/images/TOP.jpg'/>})} src='/images/TOP.jpg' placeholder=''/>
        //         <img className="picture66" onClick={()=>DisplayPreview({Name:"SANDTON SUN HOTEL", Rating:"5 star", Price:"R3 000", Location:"SANDTON",Distance:"5.6KM to City Center",Image:<img className='rightImages' />})} src='/images/sandton-sun.jpg' placeholder=''/>

        //         <h1 className='place3'>DURBAN</h1>
        //         <img className="picture77" onClick={()=>DisplayPreview({Name:"SOUTHEREN SUN ELANGENI HOTEL", Rating:"5 star", Price:"R2 000", Location:"DURBAN",Distance:"3.9KM to City Center",Image:<img className='rightImages' src='/images/PTA.jpg'/>})} src='/images/PTA.jpg' placeholder=''/>
        //         <img className="picture88" onClick={()=>DisplayPreview({Name:"PALACE RESORT HOTEL", Rating:"5 star", Price:"R1 300", Location:"DURBAN",Distance:"5.8KM to City Center",Image:<img className='rightImages' src='/images/the-palace-resort.jpg'/>})} src='/images/the-palace-resort.jpg' placeholder=''/>
        //         <img className="picture99" onClick={()=>DisplayPreview({Name:"PAVILION HOTEL", Rating:"5 star", Price:"R1 900", Location:"DURBAN",Distance:"7.7KM to City Center",Image:<img className='rightImages' src='/images/PAVILION.jpg'/>})}  src='/images/PAVILION.jpg' placeholder=''/>

        //         <h1 className='place4'>POLOKWANE</h1>
        //         <img className="picture777" onClick={()=>DisplayPreview({Name:"FUSION BOUTIQIE HOTEL", Rating:"5 star", Price:"R1 700", Location:"POLOKWANE",Distance:"6.9KM to City Center",Image:<img className='rightImages' src='/images/FUSION BOUTIQUE.jpg'/>})} src='/images/FUSION BOUTIQUE.jpg' placeholder=''/>
        //         <img className="picture888" onClick={()=>DisplayPreview({Name:"SASKIA HOTEL", Rating:"5 star", Price:"R1 200", Location:"POLOKWANE",Distance:"8.7KM to City Center",Image:<img className='rightImages' src='/images/SASKIA.jpg'/>})} src='/images/SASKIA.jpg' placeholder=''/>
        //         <img className="picture999" onClick={()=>DisplayPreview({Name:"PARK-INN HOTEL", Rating:"5 star", Price:"R1 400", Location:"POLOKWANE",Distance:"9.6KM to City Center",Image:<img className='rightImages' src='/images/PARK-INN.jpg'/>})} src='/images/PARK-INN.jpg' placeholder=''/>

        //         <h1 className='place5'>NELSPRUIT</h1>
        //         <img className="picture444" onClick={()=>DisplayPreview({Name:"WATERFRONT HOTEL", Rating:"5 star", Price:"R1 900", Location:"NELSPRUIT",Distance:"5.5KM to City Center",Image:<img className='rightImages'src='/images/WATERFRONT.jpg'/>})} src='/images/WATERFRONT.jpg' placeholder=''/>
        //         <img className="picture555" onClick={()=>DisplayPreview({Name:"KOMATI HOTEL", Rating:"5 star", Price:"R1 400", Location:"NELSPRUIT",Distance:"5.8KM to City Center",Image:<img className='rightImages' src='/images/MP.jpg'/>})} src='/images/MP.jpg' placeholder=''/>
        //         <img className="picture666" onClick={()=>DisplayPreview({Name:"PROTEA HOTEL", Rating:"5 star", Price:"R2 300", Location:"NELSPRUIT",Distance:"1.9KM to City Center",Image:<img className='rightImages' src='/images/southern-sun-elangeni.jpg'/>})} src='/images/southern-sun-elangeni.jpg' placeholder=''/>
        //     </div>
        //     <div className='preview'>
        //         <h1 className='Ph'>PREVIEW</h1>
        //     </div>



        // </div>
    )
}

export default Explore;