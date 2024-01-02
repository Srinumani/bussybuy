import { createContext, useContext, useState} from "react";
import Cartmodal from "./Components/Cartmodal";
import { signOut } from "firebase/auth";
import { db } from "./firebaseinit";
import { useNavigate } from "react-router-dom";
 
const Itemcontext=createContext();//creating context
 export function useValue(){
    const value=useContext(Itemcontext);
    return value;
}


function Customcontext({children}){
    const navigate=useNavigate();
    const [signinup,setSigninup]=useState(false);
    const [showCart,setShowCart]=useState(false);
    const [total,setTotal]=useState(0);
    const [show,setShow]=useState(true);
    const [cart,setCart]=useState([]);
    const [purchase,setPurchaseditems]=useState([]);
     
    function handleSignout(){
      signOut(db).then(user=>{console.log(user,"signout");
      navigate("/signup")
    }).catch(err=>console.log(err));
       
    }
     
     
  
     
    function handleToggle(){
        setShow(!show);
    }


    // Signin page purpose
    function signintoggle(){
        setSigninup(!signinup);
    }

    function cartToggle(){
        setShowCart(!showCart);
    }
 
    // Add to cart
    function addTocart(prod){
        const index=cart.findIndex((item)=>item.id===prod.id);
        if(index===-1){
            setCart([...cart,{...prod,qty:1}]);
            setTotal(parseInt(total)+parseInt(prod.price));
        }else{
            cart[index].qty++;
            setCart(cart);
            setTotal(parseInt(total)+parseInt(cart[index].price));
        }
    }

    function handleRemove(id) {
    
        const index =cart.findIndex((item) => item.id === id);
        if (index !== -1) {
           cart[index].qty--;
           setTotal(total-cart[index].price);
          if (cart[index].qty === 0) {
            cart.splice(index, 1);
          }
          setCart(cart);
           
        }
      }
        function increaseCartItem(itemId) {
            const updatedCart = cart.map((item) => {
              if (item.id == itemId) {
                setTotal((prevTotal) => parseInt(prevTotal) + parseInt(item.price));
                return { ...item, qty: item.qty + 1 };
              }
              return item;
            });
            setCart(updatedCart);
            
            
          }
    
    function decreaseCartItem(itemId){
        const updatedCart = cart.map((item) => {
            if (item.id == itemId && item.qty>1) {
                setTotal((prevTotal) => parseInt(prevTotal) - parseInt(item.price));
              return { ...item, qty: item.qty-1};
            }
            return item;
          });
          setCart(updatedCart);
        }
    


    //clear cart

    function clearToggle(){
        setTotal(0);
        setCart([]);
    }

    function addpurchasedItems(items){
        setPurchaseditems([...purchase,...items]);
        clearToggle();
        cartToggle();
    }

    

    return(
        <>
        <Itemcontext.Provider 
        value={{
            signintoggle,
            signinup,
            total,
            cartToggle,
            addTocart,
            clearToggle,
            cart,
            increaseCartItem,
            decreaseCartItem,
            addpurchasedItems,
            purchase,
            handleToggle,show,handleRemove,handleSignout
           
            
            }}>
          {children}

          {showCart && <Cartmodal/>}
           
        </Itemcontext.Provider>
        </>
    )
}
export default Customcontext;