import React from "react";
import { Link } from "react-router-dom";
import './top-nav.css';


const TopNav = () => {
    return <div className="top__nav">

        <div className="top__nav-wrapper">
            
            <div className="search__box">
                <input type="text" placeholder="search"/>
                <span><i className="ri-search-line"></i></span>
            </div>

            <div className="top__nav-right">
                <span className="mode"><i className="ri-moon-line"></i></span>
                <span className="notification"><i className="ri-notification-3-line"></i>
                <span className="badge">1</span>
                </span>
                <span className="settings"><i className="ri-settings-4-line"></i></span>
                <span className="profile1"><Link to ='/myprofile'><i className="ri-user-line"></i></Link></span>
                
            </div>
        </div>
    </div>
};

export default TopNav;