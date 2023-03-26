import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table2.css";
function createData(orderId, description, serviceName , price, pickupDate, deliveryDate, status) {
  return { orderId, description, serviceName , price, pickupDate, deliveryDate, status };
}

const rows = [
  createData(3263, 'Blouse', 'Cleaned,Ironed', 'Rs.240.00', '28.01.2023', '02.02.2023', 'Delivered, Paid' ),
  createData(3124, 'Jeans', 'Washed,Ironed', 'Rs.280.00', '11.12.2022','15.12.2022', 'Delivered, Paid'),
  
];

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

export default function BasicTable() {
  return (
    <div className="Table">
        
   
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
          {rows.map((row) => (
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
                <span className="status" style={makeStyle(row.status)}>{row.status}</span>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}