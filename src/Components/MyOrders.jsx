 import { getAuth } from "firebase/auth";
 import { NavLink } from "react-router-dom";
 import { useValue } from "../Customprovider";
 import { Navigate } from "react-router-dom";
function MyOrders(){
  const { total,purchase}=useValue();
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
          <NavLink className="navlink" to="/">
            <h4 className="heading-cart-img">
              <img src="https://cdn-icons-png.flaticon.com/128/2099/2099166.png" alt="Cart" />
            </h4>
          </NavLink>
        </div>
      </div>
      {purchase.length > 0 ? (
        <center>
          <h1>All Orders</h1>
          <table>
            <thead className="border">
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {purchase.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td>{item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </center>
      ) : (
        <h2>No orders yet.</h2>
      )}
    </div>

        </>
    )
}
export default MyOrders;