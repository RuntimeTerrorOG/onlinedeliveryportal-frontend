import React from "react";

const Card2 = (props) => {

    const {date, description, logo} = props.item
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

