import DashboardTime from "../DashboardTime";
import DashboardWidget from "../DashboardWidget";
import DashboardMap from "../DashboardMap";
import "./style.scss";


const DataArea = () => {
  return (
    <div className = "dataArea">
        
      <div className="dashboardTimeContainer">
        <DashboardTime/>
      </div>


        <div className="dashboardWidgetContainer">
        
          <DashboardWidget name="Delivery"/>
          <DashboardWidget name="Pickup" />
        </div>

        <div className="dashboardMapContainer">
          <DashboardMap/>
        </div>
        

    </div>
  )
}

export default DataArea