import React from 'react'
import "./topbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
         <div className="topbarWrapper">
         <div className="topLeft">
            <span className="logo">Admin Dashboard</span>
         </div>
         
         <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNoneIcon/>
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
                <LanguageIcon/>
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
                <SettingsIcon/>
            </div>
            <Link to="/user/:userId"> <img src="https://unsplash.com/s/photos/user-profile" alt="" className="topAvatar"/></Link>
         </div>
    </div>
    </div>
  );
}
