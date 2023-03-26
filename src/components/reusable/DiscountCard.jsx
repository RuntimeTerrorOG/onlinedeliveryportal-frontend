import React from "react";

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
                            <a href="#"></a>
        </div>
                    </div>
    );
};

export default DiscountCard;

