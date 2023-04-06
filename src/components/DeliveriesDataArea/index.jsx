import DeliveriesDataTable from "../../components/DeliveryDataTable";
import DeliveriesInvoiceArea from "../../components/DeliveriesInvoiceArea";
import DeliveryDate from "../../components/DeliveryDate";

import "./style.scss";

const deliveriesDataTable = () => {
  return (
    <div className= "deliveryDataArea">

        <div className="deliveryDateContainer">
        <DeliveryDate/>
        </div>

        <div className="deliveryDataTable">
        <DeliveriesDataTable/>
        </div>

        <div className="deliveryInvoiceArea">
          <DeliveriesInvoiceArea/>
        </div>
        
    </div>


  )
}

export default deliveriesDataTable