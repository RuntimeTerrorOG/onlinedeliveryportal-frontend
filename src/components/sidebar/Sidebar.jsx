import React from 'react'
import "./sidebar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import InventoryIcon from '@mui/icons-material/Inventory';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import GroupsIcon from '@mui/icons-material/Groups';
import LineAxisIcon from '@mui/icons-material/LineAxis';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"><br/><br/>Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to="/" style={{color: 'grey'}}>
                <LineStyleIcon className="sidebarIcon" />
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/newUser" style={{color: 'grey'}}>
                <PersonIcon className="sidebarIcon" />
                Users
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/newproduct" style={{color: 'grey'}}>
                <InventoryIcon className="sidebarIcon" />
                Add Items
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/product/:productId" style={{color: 'grey'}}>
                <InventoryIcon className="sidebarIcon" />
                Products
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/users" style={{color: 'grey'}}>
                <BadgeIcon className="sidebarIcon" />
                Employee Details
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/customers" style={{color: 'grey'}}>
                <GroupsIcon className="sidebarIcon" />
                Customer Details
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/" style={{color: 'grey'}}>
                <MailOutlineIcon className="sidebarIcon" />
                Mail
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/" style={{color: 'grey'}}>
                <DynamicFeedIcon className="sidebarIcon" />
                Feedback
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/" style={{color: 'grey'}}>
                <QuizIcon className="sidebarIcon" />
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Reports</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/Barchart" style={{color: 'grey'}}>
                <BarChartIcon className="sidebarIcon" />
                Bar Chart
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/Linechart" style={{color: 'grey'}}>
                <LineAxisIcon className="sidebarIcon" />
                Line Chart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}