import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BarChartIcon from '@mui/icons-material/BarChart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className = "sidebar">

      <div className="top">
        <span className ="logo">Delivery</span>
      </div>

      {/* <hr/> */}

      <div className="center">
        <ul>
            <p className="title">DASHBOARD</p>
          <li> <DashboardIcon className="icon" />  <span>Dashboard</span> </li>

            <p className="title">DELIVERY</p>
          <li> <LocalShippingRoundedIcon className="icon" />  <span>Deliveries</span>  </li>
          <li> <LocalShippingOutlinedIcon className="icon" /> <span>Pickups</span>  </li>
          <li> <LocationOnIcon className="icon" />  <span>Locations</span> </li>

            <p className="title">USEFUL</p>
          <li> <CheckroomIcon className="icon" />  <span>Laundry items</span> </li>
          <li> <BarChartIcon className="icon" />   <span>Charts</span> </li>
          <li> <ReviewsIcon className="icon" />   <span>Ratings</span> </li>

            <p className="title">USER</p>
          <li> <SettingsIcon className="icon" />   <span>Settings</span> </li>
          <li> <LogoutIcon className="icon" />   <span>Logout</span> </li>
        </ul>
      </div>

      {/* yet to be done */}
      <div className="bottom">
        bottom items here

      </div>

    </div>
  )
}

export default Sidebar


