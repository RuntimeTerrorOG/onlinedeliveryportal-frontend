import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DeliveriesDataArea from "../../components/DeliveriesDataArea";

import "./style.scss";

const Deliveries = () => {
  return (
    <div className ="deliveries">

      <div className="sidebarContainer">
        <Sidebar/>

      </div>

      <div className="deliveryContainer">

        <div className="navbarContainer">
          <Navbar/>
        </div>

        <div className="DeliveryDateContainer">
          
        </div>

        <div className="deliveryTableArea">
            <DeliveriesDataArea/>
        </div>

        

      </div>
      
        
    </div>
  )
}

export default Deliveries