import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from '../../assets/dummy data/navLinks'
import "./Sidebar.css";
import { Link } from "react-router-dom";
import profileImg from '../../assets/images/user-286.png';
import logo from '../../assets/images/logo.jpeg';

const Sidebar = () => {
    return  (
    <div className="sidebar">
        <div className="sidebar__top">
        
            <h2>
            <div className="logo">
               
               <img src={logo} alt=""/>
              
               </div>
                    LAUNDRY MART

                    <i className='ri-menu-line'></i>
            </h2>

            
            
            <div className="profile">
               
                    <span>
                    <Link to ='/myprofile'><img src={profileImg} alt=""/></Link>
                    </span>
                    <h3>
                      Hello, Ann
                      </h3>
                </div>
            

        </div>

        <div className ="sidebar__content">
            <div className="menu">
                <ul className="nav__list">
                    {navLinks.map((item,index) => (
                    <li className="nav__item" key={index}>
                        <NavLink 
                            to = {item.path}
                            className={(navClass) =>
                                navClass.isActive ? "nav__active nav__link" : "nav__link"
                            }
                            >
                                <i className={item.icon}></i>
                            
                            {item.Display}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar__bottom">
                <span>
                    <i className="ri-logout-circle-r-line"></i> Logout
                </span>
            </div>
        </div>
    </div>
    );
};
export default Sidebar;