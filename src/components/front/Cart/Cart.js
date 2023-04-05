import React from "react";
import "./Cart.css";

const Cart = ({cartItems, handleAddProduct, handleRemoveProduct, handleCartClearence}) => {//component takes 4 props
  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);//calculate total price of items
  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
       <div className="clear-cart">
        {cartItems.length >=1 && (
          <button className="clear-cart-button" onClick={handleCartClearence}>{/*button shown when cart is not empty*/}
          Clear Cart
          </button>
          )
        }   
    </div>

     {cartItems.length === 0 && (
      <div className="cart-items-empty">No items are added.</div>
    )}
    <div>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-items-list">
          <img
             className="cart-items-image"
             src={item.image} 
             alt={item.name}
           />
        <div className="cart-items-name">{item.name}</div>
        <div className="cart-items-function">
          <button //to increase item quantity
           className="cart-items-add" 
           onClick={() => handleAddProduct(item)}
           >
            + 
          </button>
          <button //to decrease item quantity
            className="cart-items-remove"
            onClick={() => handleRemoveProduct(item)}
            >
              -
          </button>
      
        </div>
        <div className="cart-items-price">
          {item.quantity} * Rs.{item.price}
        </div>
        </div>
      ))}
    </div>
      <div className="cart-items-total-price-name">
        Total price
        <div className="cart-items-total-price">
          Rs.{totalPrice}
        </div>
       </div>
    </div>

  );
  
};

export default Cart;
