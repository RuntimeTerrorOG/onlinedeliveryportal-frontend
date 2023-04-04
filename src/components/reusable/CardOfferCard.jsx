import React from "react";

const CardOfferCard = (props) => {

    const {title, icon} = props.item
    return(
        <div className="cardoffer__card">
                        <div className="cardoffer__content">
                            <h4>{title}</h4>
                            </div>
                            <span className="cardoffer__icon">
                                <i className= {icon}></i>
                            </span>
                            <div className="cardoffer__actions">
                            <button className="cardoffer__btn">View</button>
                            <a href="#"></a>
        </div>
                    </div>
    );
};

export default CardOfferCard;