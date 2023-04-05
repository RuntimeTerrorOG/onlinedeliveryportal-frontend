import React from "react";
import "./Products.css";
import Category from "../Category/Category";

const Products = ({productItems, handleAddProduct }) => {//take 2 props
  return (
    <div className="products">
      <Category/>
      {productItems.map((productItem)=>( //renders list of product items as cards
        <div className="card">
          <div>
            <img
             className="product-image"
             src={productItem.image} 
             alt={productItem.name}
            />
         </div>
         <div>
          <h3 className="product-name">{productItem.name}</h3>
         </div>
         <div className="product-price">Rs.{productItem.price}</div>
         <div>
          <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}>Add to cart</button> {/*calls handleAddProduct function when clicked button*/}
         </div>
        </div>
      ))}
    </div>
  ); 
};

export default Products;
