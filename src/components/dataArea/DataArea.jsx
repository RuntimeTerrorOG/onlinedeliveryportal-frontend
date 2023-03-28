import DashboardWidget from "../dashboardWidget/DashboardWidget";
import "./dataArea.scss";


const DataArea = () => {
  return (
    <div className = "dataArea">
        
        <div className="dashboardWidget">
          <DashboardWidget/>
          <DashboardWidget/>
        </div>
        

    </div>
  )
}

export default DataArea