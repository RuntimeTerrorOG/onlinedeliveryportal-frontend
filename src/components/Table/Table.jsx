// Importing React and necessary Material-UI components
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css";

// Function to create a row of data with given parameters
function createData(orderId, description, serviceName , price, pickupDate, deliveryDate, status) {
  return { orderId, description, serviceName , price, pickupDate, deliveryDate, status };
}

// Creating rows of data using createData function
const rows = [
  createData(4366, 'Dress - Casual', 'Dry Clean', 'Rs.350.00', '03.02.2023', '06.02.2023', 'Pending' ),
  createData(4367, 'Shirt on Hanger', 'Washed, Pressed & Hung', 'Rs.220.00', '06.04.2023','10.04.2023', 'Approved'),
  
];

// Function to set style based on status
const makeStyle=(status)=>{
  if(status === 'Approved')
  {
     return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'green'
     }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

// React component for displaying a basic table with the rows of data
export default function BasicTable() {      
  return (
    
     // Styling the container for the table
    <div className="Table">         
        <h2>Order Status</h2>
   
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ord.Id</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Service Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Pickup Date</TableCell>
            <TableCell align="left">Delivery Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (                  //loop through the 'rows' array and render each object as a table row
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.serviceName}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.pickupDate}</TableCell>
              <TableCell align="left">{row.deliveryDate}</TableCell>
              <TableCell align="left">
                <span className="status" style={makeStyle(row.status)}>{row.status}</span> {/*styles based on the status of the order*/}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
    
                