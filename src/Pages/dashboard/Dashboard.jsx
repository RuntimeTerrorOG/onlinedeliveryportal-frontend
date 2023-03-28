import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DataArea from "../../components/dataArea/DataArea";
import "./dashboard.scss";


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