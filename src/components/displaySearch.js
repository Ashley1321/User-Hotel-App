
 import { Link } from "react-router-dom";
 import React, {useState} from "react";


 function AllHotels(props){
   const [search, setSearch] = useState('');
        return (
        <div>
            {<input onChange={(e)=>setSearch(e.target.value)} className="searchBar" type='text' placeholder='Search Hotel by Location' /> }
            { <div className="searchOutput">
                {
                    props.hotelArray.filter((res)=>{
                        if (res.place.toLowerCase().includes(search.toLocaleLowerCase())){
                            return(res);

                        }else {
                            if (search == ''){
                                return(res);
                            }
                        }
                    })
                    .map((res,index )=>(
                        <div>
                            <div>
                                <Link to={`hotelArray/${res.Price}`}>
                                    {res.HotelName}
                                </Link>
                            </div>
                        </div>
                    ))
                }

            </div> }


        </div>
    )
 }



 export default AllHotels;