import React from "react";
import { Link } from "react-router-dom";//import link component from react-router-dom library
import "./Header.css";



const Header = ({cartItems}) => {//takes cartItems prop
  return (
    <header className="header">
      <div className="logo">
        <h1>
        <img className="img" src="./pics/logo1.jpg" />
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/order">Order</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
            <span className="cart-length">
              {cartItems.length === 0 ?"":cartItems.length} {/*number of items in the cart*/}
            
            </span>
            
          </li>
        </ul>
      </div>
    </header>
  
  );
};

export default Header;
