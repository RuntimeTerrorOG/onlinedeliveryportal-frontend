import React from "react";

//Destructure the title, description and icon from the props object
const DiscountCard = (props) => {

    const {title, description, icon} = props.item
    return(
        <div className="discount__card">
                        <div className="discard__content">
                            <h4>{title}</h4>
                            <span>{description}</span>
                            </div>
                            <span className="discard__icon">
                                <i className= {icon}></i>
                            </span>
                            <div className="discard__actions">
                            <button className="discard__btn">Get My Coupon Code</button>
                            <a href="#"></a>     {/*This link doesn't have any text or content*/}
        </div>
                    </div>
    );
};

export default DiscountCard;



