import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import {  Route, Routes } from "react-router-dom";

const Route1 = ({
  productItems, 
  cartItems, 
  handleAddProduct, 
  handleRemoveProduct,
  handleCartClearence
}) => {
  return (
  <div>
    <Routes>
     <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
     <Route path="/" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearence={handleCartClearence}/>} />
    </Routes>
  </div>
  );
  
};

export default Route1;
