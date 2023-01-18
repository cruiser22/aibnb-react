 import React from 'react';
 import logo from "/Users/paulvinchent/Desktop/airbnb/src/assets/logo.png"
 const Navbar = () => {
   return (
     <div> 
      {/* Left */}
        <div className = "bg-red-200 h-20 flex ">
            <img src= {logo } alt="" className= "w-40" />
            
          </div>
     </div>
   )
 }
 
 export default Navbar 