import React from "react";
import {  Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../Pages/Dashboard"
import History from "../Pages/History"
import MyDiscounts from "../Pages/MyDiscounts"
import MyProfile from "../Pages/MyProfile"



const Router = () => {
    return (
   
    <Routes>
    <Route 
    path="/"
    element={<Navigate to ="/dashboard" element={<Dashboard/>}/>}

    />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/mydiscounts' element={<MyDiscounts/>}/>
        <Route path='/myprofile' element={<MyProfile/>}/>
    </Routes>
    
    );
};

export default Router;