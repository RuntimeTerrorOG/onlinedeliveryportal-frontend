import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {
    const [data,setData]= useState({});  

    const handleChange = (type, event) => {
      const _data = { ...data };
      const target = event.target;
      if (target.type === "checkbox") _data[type] = target.name;
      else _data[type] = target.value;
  
      setData(_data);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify(data)
  
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      fetch("http://localhost:8080/postProduct", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    };





  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            onChange={(e) => handleChange("name", e)}
            type="text"
            placeholder="Pillows"
            value={data.name}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            onChange={(e) => handleChange("price", e)}
            type="text"
            placeholder="Rs.200"
            value={data.price}
          />
        </div>
        <div className="addProductItem">
          <label>Category</label>
          <input
            onChange={(e) => handleChange("Category", e)}
            type="text"
            placeholder="other"
            value={data.Category}
          />
        </div>
        <button className="newUserButton" onClick={handleSubmit}>
          {" "}Create</button>
      </form>
    </div>
  );
}