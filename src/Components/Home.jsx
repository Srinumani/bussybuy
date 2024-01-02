 
import React, { useState } from 'react';
import { data } from "../data";
import Items from "./Items";
 
 
function Home(){

    const[searchTerm,setSearchTerm]=useState("");
    

    function onChangeEvent(event){
        setSearchTerm(event.target.value);
    }

    const filterData=data.filter((item)=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
)

     
    return(
      <> 
        <div className="search"> 
        <input 
        type="search" onChange={onChangeEvent}
        value={searchTerm}
        placeholder="Search...."/>
        </div>
        <div className="home-container">
            {filterData.map((item, index) => (
                <Items
                    key={index}
                    title={item.title}
                    image={item.img}
                    des={item.description}
                    price={item.price}
                    id={item.id} 
                />
            ))}
        </div>
        </>
    );
}

export default Home;
