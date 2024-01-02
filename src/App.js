import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Signup from "./Components/Signin-up";
import Customcontext from "./Customprovider";
import MyOrders from "./Components/MyOrders";
 
import ProtectedRoutes from "./Protectedroutes";

 

function App() {

   
  return (
    
    
        <BrowserRouter>
            <Customcontext> 
              <Navbar/>
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/orders" element={<MyOrders />} />
            
      </Routes> 
      </Customcontext>
      </BrowserRouter>
      
   
     
  )
}

export default App;
