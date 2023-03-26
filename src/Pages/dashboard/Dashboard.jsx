import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./dashboard.scss";


const Dashboard = () => {
  return (
    <div className = "dashboard">
        <Sidebar/>
        <div className="dashboardContainer">
        <Navbar/>
          Dashboard container
          
        </div>
    </div>
  )
}

export default Dashboard;