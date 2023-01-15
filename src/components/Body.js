import React, { useEffect, useState } from "react";
import Card from "./Card"; 
import {restaurantList} from "../contants.js";
import Shimmer from "./Shimmer.js";

 
    function filterData(searchtxt,restaurants) {
                   
           const filterData =  restaurants.filter((restaurant)=>{return 
                    restaurant?.data?.name?.toLowerCase()?.includes(searchtxt.toLowerCase())
                    })
  
        
            return filterData;
         
    }
 
    
    const Body = ()=>{
        const [allRestaurants,setAllRestaurants] = useState([]);
        const [filteredRestaurants,setFilteredRestaurants] = useState([]);
        const [searchtxt,setSearchtxt]  = useState("");

        useEffect(()=>{
            getRestaurants();
        },[]);
        
        async function getRestaurants(){
            const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9456906&lng=78.16424780000001&page_type=DESKTOP_WEB_LISTING');

            const data = await response.json();
            console.log(data?.data?.cards[2]?.data?.data?.cards);

            setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
        }

        return( allRestaurants.length === 0) ?  <Shimmer />
        : (
        <div className="body-container">

            <div className="search-input-div">

            <input className="search-input" type="text" placeholder="Search" value={searchtxt} onChange={e=>{ setSearchtxt(e.target.value)}}  />

            <button className="search-btn" onClick={()=>{ 
                const data = filterData(searchtxt)
                setFilteredRestaurants(data)
                 }}>Search</button>

            </div>

            <div className="cards-collection-div">

            {filteredRestaurants.map((restaurant)=>{
                return(
                    <Card key={restaurant.data.id} {...restaurant.data} />
                );
            })}

           
             
            </div>
        </div>
    );
}

export default Body;