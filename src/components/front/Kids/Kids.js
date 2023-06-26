import React, { useEffect, useState } from "react";
import "../Products/Products.css";
import Category from "../Category/Category";
import axios from "axios";

const Kids = ({handleAddProduct}) => {    
  const[items,setItems]=useState([]);
  useEffect(()=>{
      loadItems();
  },[]);
  const loadItems=async()=>{
    const result=await axios.get("http://localhost:8080/items");
    setItems(result.data);
  }

  return (
    <div className="products">
      <div>
        <h1>Kids</h1>
      </div>
      <Category/>
      {
        items.filter((item)=>{
          return item.category.includes("Kids");
        }).map((item)=>(
          <div className="card">
          <div>
            <img
             className="product-image"
             src={item.image} 
             alt={item.name}
            />
          </div>
         <div>
          <h3 className="product-name">{item.name}</h3>
         </div>
         <div className="product-price">Rs.{item.price}</div>
         <div>
          <button className="product-add-button" onClick={()=>handleAddProduct(item)}>Add to cart</button> {/*calls handleAddProduct function when clicked button*/}
         </div>
        </div>
        ))
      }
    </div>
  );
  
  
};


export default Kids;


