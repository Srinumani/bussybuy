import React from 'react';
import { useValue } from '../Customprovider';

function Items(props) {
    const { title, des, price, image,id}=props;
    const {addTocart}=useValue();
    
        return (
        <div className="item-container">
            <h4>{title}</h4>
            <img src={image} alt={title} className="item-image" />
            <h3>{des}</h3>
            <h4>${price}</h4>
            
            <button  className='item-button' onClick={()=>addTocart({price,title,des,id,image})}>Add to Cart</button>
        </div>
    );
}

export default Items;
