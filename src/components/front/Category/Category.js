import React from "react";
import { Link } from "react-router-dom"; //import link component from react-router-dom library
import "./Category.css";


const Category = () => { //defines a new functional component called Category
  return (
    <header className="category">
      
      <div className="category-links">
        <ul>
          <li>
            <Link to="/all">All</Link> {/*creates a Link component that will link to the /all route */}
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
