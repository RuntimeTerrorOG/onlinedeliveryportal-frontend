import React from "react";
import "../Products/Products.css";
import Category from "../Category/Category";

const Ladies = ({productItems, handleAddProduct}) => {    
  return (
   <div className="products">
     <Category/> {/*rendering the category component*/}
    
   
     {productItems.map((productItem)=>(
      <div>
        {productItem.category==="Ladies"&&(//render only those items which have category equal to "Ladies"
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
        )}
      </div>
      ))}
    </div>
  ); 
};


export default Ladies;


