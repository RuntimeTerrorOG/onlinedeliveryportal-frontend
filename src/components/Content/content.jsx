import React from "react";
import Card from "../Card/Card";
import './content.css';
import logo1 from '../../assets/images/hnb.gif';
import logo2 from '../../assets/images/sampath-bank.png';
import Card2 from "../Card2/Card2";

// Define two objects with properties for the Card2 component
const card1Obj = {
    date: '30th - 31st Mar',
    description: <p>20% Credit<br/> 10% Debit </p>,
    logo: <img src={logo1} alt="logo"/>
};

const card2Obj = {
    date: '1st - 3rd Apr',
    description: '15% Credit',
    logo: <img src={logo2} alt="logo"/>
};

// Define a functional component called Content
const Content = () =>{

 // Render the component   
    return(
<div className="content">

  
    <h2>Discounts</h2>
    

    <div className="wrapper">
    <Card/>
    </div>


    <div className="Content2">
           
    <h2>Card Offers</h2>
           
           
               <div className="content2__card">
                <Card2 item= {card1Obj} />
                <Card2 item={card2Obj} />
                   
               </div>
           </div>
           
       </div>

    



    

    );
};

export default Content;





