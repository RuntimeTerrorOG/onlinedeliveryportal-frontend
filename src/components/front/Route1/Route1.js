import React from "react";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import Category from "../Category/Category";
import {  Route, Routes } from "react-router-dom";
import Gents from "../Gents/Gents";
import Ladies from "../Ladies/Ladies";
import Kids from "../Kids/Kids";
import Home from "../Home/Home";


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
        <Route path="/order" element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/order" element={<Category/>}/>
        <Route path="/all" element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/gen" element={<Gents productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/ladies" element={<Ladies productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/kids" element={<Kids productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/home" element={<Home productItems={productItems} handleAddProduct={handleAddProduct} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearence={handleCartClearence}/>} />
      </Routes>
   </div>
  );
  
};

export default Route1;
