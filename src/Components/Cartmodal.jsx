import { Link, NavLink } from "react-router-dom";
import { useValue } from "../Customprovider";
import { getAuth } from "firebase/auth";
import { Navigate } from "react-router-dom";

function Cartmodal(){
 const {cartToggle,total,clearToggle,cart,increaseCartItem,decreaseCartItem,addpurchasedItems, handleRemove}=useValue();
 const auth=getAuth();
 const isLoggedIn=auth.currentUser!==null;

  if(!isLoggedIn){
     return <Navigate to="/signup"/>
   } 
    
    return(
        <>
        <div className="container">
            <div className="top-container">
                <div className="">
                    <h4 className="heading-cart-img" onClick={cartToggle}><img src="https://cdn-icons-png.flaticon.com/128/2099/2099166.png"/></h4>
                </div>
                <div className="">
                    <h4 className="heading-cart" onClick={clearToggle}>clear</h4>
                </div>
            </div>
            <div className="middle-container">
                {cart.map((item)=>(
                    <>
                 <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.title} className="cart-item-image"/>
                        <div className="item-details">
                            <h3 className="item-title">{item.title}</h3>
                            <p className="item-price">${item.price}</p>
                            <div className="item-actions">
                            <button className="remove-btn" onClick={()=>increaseCartItem(item.id)}>+</button>
                            <span className="quantity">{item.qty}</span>
                            <button className="decrease-btn"  onClick={() =>decreaseCartItem(item.id)}>-</button>
                             
                            </div>
                            <div>
                            <button className="removecart-btn" onClick={()=>handleRemove(item.id)}>Remove Cart</button>
                            </div>
                        </div>
                        
                </div>

                    </>
                ))}
                 
            </div>
              <div  className={total==0?"visibility":"bottom-container"}>
                <div>
                     <h4 onClick={()=>addpurchasedItems(cart)}> Purchase:-</h4> 

                </div>
                
                <div>
                    <h4>{total}</h4>
                </div>
             </div>
              
        </div>
        </>
    )
}

export default Cartmodal;