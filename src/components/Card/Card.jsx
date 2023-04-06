import React from "react";


// Define a functional component called Card
const Card = () => {
 return(  
<div className = "card">                   

          <h4>My Discounts</h4> 

          <span className="card__icon"> 
             <i className="ri-percent-line"></i></span>

          <div className="card__actions">
             <button className="card__btn">View</button>
             <a href="#"></a>      {/* Add an empty link for accessibility */}
        </div>
          
</div>
 );
};

export default Card;
