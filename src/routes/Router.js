//React component that defines the routing logic for the application
import React from "react";
import {  Routes, Route, Navigate } from "react-router-dom";  //uses the Routes and Route components provided by the react-router-dom library to map URL paths to different components.
import Dashboard from "../Pages/Dashboard"
import History from "../Pages/History"
import MyDiscounts from "../Pages/MyDiscounts"
import MyProfile from "../Pages/MyProfile"



const Router = () => {
    return (
   
    <Routes>
    <Route 
    path="/"
    element={<Navigate to ="/dashboard" element={<Dashboard/>}/>} //Route components map their respective URL paths to their corresponding components

    />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/mydiscounts' element={<MyDiscounts/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
    </Routes>
    
    );
};

export default Router;