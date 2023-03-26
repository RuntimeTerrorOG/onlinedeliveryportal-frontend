import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = ({cartItems}) => {
  return (
    <header className="header">
      <div>
        <h1>
          <Link to="/" className="logo">
            Laundry Mart
          </Link>
        </h1>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/">Order</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/contactus">Contactus</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
            <span className="cart-length">
              {cartItems.length === 0 ?"":cartItems.length}
              
            </span>
          </li>
        </ul>

      </div>
    </header>
  
  );
};

export default Header;
