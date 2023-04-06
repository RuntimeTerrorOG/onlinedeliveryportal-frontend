import React from "react";

const CardOfferCard = (props) => {

    //Destructure the title and icon from the props object
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
                            <a href="#"></a>     {/*This link doesn't have any text or content*/}
        </div>
                    </div>
    );
};

export default CardOfferCard;
