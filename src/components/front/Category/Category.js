import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";


const Category = () => {
  return (
    <header className="category">
      
      <div className="category-links">
        <ul>
          <li>
            <Link to="/all">All</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/gen">Gents</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/ladies">Ladies</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>

      </div>
    </header>
  
  );
};

export default Category;
