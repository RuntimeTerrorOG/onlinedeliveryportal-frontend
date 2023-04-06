import React from "react";

// Define a functional component called Card2 that takes in a "props" object
const Card2 = (props) => {

// Destructure the "date", "description", and "logo" properties from the "props" object
    const {date, description, logo} = props.item

    // Render the component
    return(
        <div className="card2">
                        <div className="card2__content">
                            <h4>{date}</h4>
                            <span>{description}</span>
                            </div>
                            <div className="card2__icon">
                                {logo}
                            </div>
                            
                            
        </div>
                    
    );
};

export default Card2;
