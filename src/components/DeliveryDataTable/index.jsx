import { DataGrid } from '@mui/x-data-grid';
import {deliveryCols,deliveryRows} from '../../deliveryDataTableSrc';

import "./style.scss";



const deliveryDataTable = () => {
  
  return (
    <div className = "deliveryDataTable">
      
      <DataGrid
        rows={deliveryRows}
        columns={deliveryCols}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
      
    </div>
  )
}

export default deliveryDataTable