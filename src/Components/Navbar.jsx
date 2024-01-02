import { NavLink, Outlet } from "react-router-dom";
 


import { useValue } from "../Customprovider";
import { useState } from "react";

function Navbar(){

     
    const {cartToggle,handleToggle,show,handleSignout}=useValue();

    if(show){

        return(
            <>
            <nav className="navbar-container">
                <div className="navbar-title">
                <NavLink className="navlink" to="/"><h4>Buy-Bussy</h4></NavLink>
                </div>
                <ul>
                   <NavLink className="navlink" to="/"><li>Home</li></NavLink>  
                    <li onClick={cartToggle}>Cart</li>
                    <NavLink className="navlink" to="/orders"> <li >My Orders</li></NavLink> 
                    
                    <NavLink  className="navlink" to="/signup"><li  onClick={handleSignout}>{show?"Logout":"LogIn"}</li></NavLink> 
                </ul>
            </nav>
            <Outlet/>
            </>
        )
    }
    else{
        return(
            <>
            <nav className="navbar-container">
                <div className="navbar-title">
                <NavLink className="navlink" to="/"><h4>Buy-Bussy</h4></NavLink>
                </div>
                <ul>
                   <NavLink className="navlink" to="/"><li>Home</li></NavLink>  
                   <NavLink  className="navlink" to="/signup"><li  onClick={handleToggle}>{show?"Logout":"LogIn"}</li></NavLink> 
                
                </ul>
            </nav>
            <Outlet/>
            </>
        )
    }
    
}

export default Navbar;