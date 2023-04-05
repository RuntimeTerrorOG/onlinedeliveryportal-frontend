import React from "react";
import "../Products/Products.css";
import Category from "../Category/Category";

const Gents = ({productItems, handleAddProduct}) => {    
  return (
    <div className="products">
      <Category/>
    
   
       {productItems.map((productItem)=>(
        <div>
          {productItem.category==="Gents"&&(
      
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
                 <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}>Add to cart</button>
                </div>
              </div>
           )
          }
        </div>
        ))}
    </div>
  );  
};


export default Gents;


