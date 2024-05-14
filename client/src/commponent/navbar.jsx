import React from 'react'

import shop from "../picture/store-svgrepo-com.svg"
import carticon from "../picture/shopping-cart-trolley-svgrepo-com.svg"
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
function Navbar(){
    const [dropdownVisible, setDropdownVisible] = useState(false);
  // Function to toggle the dropdown visibility
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
      };

    let navigate = useNavigate(); 
  const routeCart = () =>{ 
    let path = `/cart`; 
    navigate(path);
  }
  
  const routeOrder = () =>{ 
    let path = `/order`; 
    navigate(path);
  }
  const routeHome = () =>{ 
    let path = `/`; 
    navigate(path);
  }
return(
    <>
    
    <div className=" h-[70px] flex  justify-around  bg-pink-200 ">
    <div className=" flex items-center pl-20  " onClick={routeHome}> 
    <img className=" w-[50px]" src={shop} alt="shop" />
        <p className=" text-3xl">SHOPSHOPING</p>
        </div>
     
  
       <div className=" text-3xl items-center flex  gap-3">
       <img  className=" w-[40px]" src={carticon} alt="Cart" onClick={routeCart}/>
       <div className="dropdown relative">
          <img src="menu-icon.png" alt="Menu" onClick={toggleDropdown} />
          {dropdownVisible && (
            <ul className="dropdown-content  absolute top-10  left-6 bg-white p-5 w-[150px] rounded-xl">
              <li><a href="#" className=' text-2xl'>Profile</a></li>
              <li><a href="#" className=' text-2xl' onClick={routeOrder}>Your Order</a></li>
              <li><a href="#"className=' text-2xl'>Logout</a></li>
            </ul>
          )}
        </div>
       </div>
    </div>
    </>
)
}

export default Navbar