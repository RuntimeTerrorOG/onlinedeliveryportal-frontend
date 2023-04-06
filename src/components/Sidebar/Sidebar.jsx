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

        <div className="sidebar__top">    {/*sidebar top*/}

            <div className="logo">
               
               <img src={logo} alt=""/>
              
            </div>
                   <div className="title">

                    LAUNDRY MART

                    </div>
                   
            
        </div>
            
            
            <div className="profile">            {/*profile*/}
               
                    <span>
                        <Link to ='/myprofile'><img src={profileImg} alt=""/></Link>
                    </span>
                          <h3>
                          Hello, Ann
                          </h3>
            </div>
            

        <div className ="sidebar__content" >        {/*sidebar content*/}
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

            <div className="sidebar__bottom">            {/*sidebar bottom*/}
                <span>
                    <i className="ri-logout-circle-r-line"></i> Logout
                </span>
            </div>
        </div>
    </div>
    );
};
export default Sidebar;