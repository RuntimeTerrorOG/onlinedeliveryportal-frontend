import React, { useEffect, useState } from "react";
import "./Products.css";
import Category from "../Category/Category";
import axios from "axios";

const Products = ({ handleAddProduct }) => {//take 2 props
  const[items,setItems]=useState([]);
  const[search,setSearch] = useState('');
  console.log(search);
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
        <h1>All Products</h1>
      </div>
      <div class="search-container">
        <form action="#">
            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search..." name="search"/>
        </form>
      </div>
      <Category/>
      {
        items.filter((item)=>{
          return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
        }).map((item,index)=>(
          
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

export default Products;
