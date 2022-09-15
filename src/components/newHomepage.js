import { Link } from 'react-router-dom';
import './css/newHome.css'
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore'
import { db} from '../config/firebase'


function MyHomePage(props) {


    const [myHotels, setMyHotels] = useState([]);
    const [search, setSearch] = useState('');

 

    useEffect(() => {
        const getData = async () => {
            let data = await getDocs(collection(db, "hotels"))
            setMyHotels(
                data.docs.map((doc) => (
                    doc.data()
                ))
            )
        }
        getData()

    }, [])
    console.log('my testing hotels', myHotels)
    return (
        <div className='MajorDiv'>
            <div className='myHeaderDiv'>
                <h3 style={{ margin: '0', paddingTop: "30px", paddingLeft: "15px", color: 'black', textAlign: 'center' }}>Look for the most LAXURIOUS hotels in South Africa</h3>
                <h1 style={{ margin: '0', paddingTop: "20px", paddingLeft: "15px", color: 'black', textAlign: 'center' }}>Introducing 12 Highly Rated Hotels Across 4 Major Cities In RSA</h1>
                <div className='MyColouredLinks'>
                    <Link style={{ textDecoration: 'none', backgroundColor: 'black', marginLeft: "60px", borderRadius: '5px', padding: '3px', color: " gray" }}>#About US</Link>
                    <Link to="/landingPage" style={{ textDecoration: 'none', backgroundColor: 'black', marginLeft: "80px", borderRadius: '5px', padding: '3px', color: " gray" }}>#Home</Link>
                </div>
            </div>
            <div><h1 style={{ textAlign: 'center' }} className="myHeading">Most Booked Hotels</h1></div>
            <div className='searchDiv'>

                <input className='searchBar' type='text' placeholder='Search hotel by location'/>
                <img src="/images/Search.png" className="SearchIcon" />
                
            </div>
            <div className='MainContents'>
                {/* <h1>MainContents come here</h1> */}
                <div className='box'>

                    <div className='Imagebox'>

                        {
                            myHotels.map((results) => (
                                <div className=''>
                                  <img className='box' src={results.image}/> 
                                    <div className="underDeco">
                                        <h1 className='cityHeading'> {results.hotelName}</h1>
                                        <h2 style={{textAlign:'center', marginTop:'-20px'}}> {results.location}</h2>
                                        <h3 className='price'>R{results.amount}</h3>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                  
                    {/* <div className='searchingRes'>
                    {
                     props.list.filter((res)=>{
                         if (res.location.toLowerCase().includes(search.toLocaleLowerCase())){
                             return(res);

                         }else {
                             if (search == ''){
                                 return(res);
                             }
                         }
                     })
                     .map((res)=>(
                         <div>
                             <div>
                                 {res.img}
                             </div>
                         </div>
                     ))
                 }


                    </div> */}
                
           

                </div>
            </div>
        </div>
    )
}

export default MyHomePage;