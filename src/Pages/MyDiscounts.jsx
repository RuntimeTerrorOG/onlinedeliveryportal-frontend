import React from "react";
import DiscountCard from "../components/reusable/DiscountCard";
import CardOfferCard from "../components/reusable/CardOfferCard";
import '../styles/mydiscounts.css';

const dis1Obj = {
    title: 'Get 10% OFF',
    description: 'Please redeem this offer on any order within the next 24hrs to receive an instatnt 10% off at checkout',
    icon: 'ri-coupon-line'
};

const dis2Obj = {
    title: 'This Week Only!',
    description: 'Free delivery on your first order, use the coupon code' ,
    icon: 'ri-coupon-line'
};

const dis3Obj = {
    title: 'Card Offers',
    icon: 'ri-coupon-line'
};


const MyDiscounts = () => {
    return (
        <div className="mydiscounts">
           
            <h2>My Discounts</h2>
            <div className="mydiscounts__wrapper">
                <div className="mydiscounts__cards">
                 <DiscountCard item={dis1Obj} />
                 <DiscountCard item={dis2Obj} />
                 <CardOfferCard item={dis3Obj} />

                    
                </div>
            </div>
            
        </div>
    )
};



export default MyDiscounts;