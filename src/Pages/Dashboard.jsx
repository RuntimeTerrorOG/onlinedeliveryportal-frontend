import React from "react";
import '../styles/dashboard.css';
import SingleCard from "../components/reusable/SingleCard";
import Table from "../components/Table/Table";

const orderObj = {               /*3 objects containing title, total number and icon*/
    title: 'My Orders',
    totalNumber: 2,
    icon: 'ri-file-list-line'
};

const progressObj = {
    title: 'In Progress',
    totalNumber: 2,
    icon: 'ri-t-shirt-air-line'
};

const completeObj = {
    title: 'Completed',
    totalNumber: 0,
    icon: 'ri-checkbox-circle-line'
};




const Dashboard = () => {
    return (
        <div className="dashboard">
           
            <h2>Dashboard</h2>
            <div className="dashboard__wrapper">             {/*objects are passed as props to the singlecard*/}
                <div className="dashboard__cards">
                 <SingleCard item={orderObj} />
                 <SingleCard item={progressObj} />
                 <SingleCard item={completeObj} />    
                </div>

                <div className="dashboard__table">
                  <Table /> 
                </div>

            </div>  
        </div>
    )
};

export default Dashboard;