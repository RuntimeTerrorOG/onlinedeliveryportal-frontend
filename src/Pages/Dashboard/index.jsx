import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import DataArea from "../../components/DashboardDataArea";
import "./style.scss";


const Dashboard = () => {
  return (
     <div className = "dashboard">


        <div className="sidebarContainer">
            <Sidebar/>
        </div>

           
         <div className="dashboardContainer">

              <div className="navbarContainer">
                <Navbar/>
              </div>
              <div className="dataContainer">
                <DataArea/>
                  
              </div>

         </div>
                
        
    </div>
  )
}

export default Dashboard;