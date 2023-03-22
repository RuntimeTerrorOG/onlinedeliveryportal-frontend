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
import PieChartIcon from '@mui/icons-material/PieChart';
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
                <LineStyleIcon className="sidebarIcon" />
                <Link to="/"> Home</Link>
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Menu</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem">
                  <PersonIcon className="sidebarIcon" /><Link to="newUser"> Users</Link>
                </li>
                <li className="sidebarListItem">
                  <InventoryIcon className="sidebarIcon" />
                  <Link to="/newproduct">Add Items</Link>
                </li>
                <li className="sidebarListItem">
                  <InventoryIcon className="sidebarIcon" />
                  <Link to="/product/:productId">Products</Link>
                </li>
              <li className="sidebarListItem">
                <BadgeIcon className="sidebarIcon" />
                <Link to="/users">Employee Detailes</Link>
              </li>
              <li className="sidebarListItem">
                <GroupsIcon className="sidebarIcon" />
                Customer Details
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <MailOutlineIcon className="sidebarIcon" />
                Mail
              </li>
              <li className="sidebarListItem">
                <DynamicFeedIcon className="sidebarIcon" />
                Feedback
              </li>
              <li className="sidebarListItem">
                <QuizIcon className="sidebarIcon" />
                FAQ
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Reports</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <PieChartIcon className="sidebarIcon" />
                <Link to="piechart">Pie Chart </Link>
              </li>
              <li className="sidebarListItem">
                <LineAxisIcon className="sidebarIcon" />
                <Link to="/Linechart">Line Chart</Link>
              </li>
              <li className="sidebarListItem">
                <BarChartIcon className="sidebarIcon" />
                Bar Chart
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }