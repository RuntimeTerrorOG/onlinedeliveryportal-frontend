import React from "react";
import './TopNav.css';
import logo from '../../assets/images/logo.jpeg';
import basket from '../../assets/images/basket.png';


const TopNav = () => {
    return <div className="top__nav">
        
        <div className="top__nav-left">

              <h2>
                <div className="logo">

                    <img src={logo} alt=""/>

                </div> 
                    LAUNDRY MART 
                    <span>
                    Home 
                    Contact Us 

                    <div className="basket">

                    <img src={basket} alt=""/>

                </div> 
                    </span>
                </h2>

                </div>

                
                    
                    
                   
                    
                </div>  
             
        
};

export default TopNav;