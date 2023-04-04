//tempory data for delivery table.later from database

export const deliveryCols = [

    {field:'invoiceNo', headerName:'Invoice No', width: 100},
    {field: 'customerName', headerName: 'Customer Name', width: 150},
    {field:'address', headerName:'Address', width:300},
    {field:'payment', headerName:'Payment', width: 150},
    {field:'status', headerName:'Status', width: 150,
         renderCell: (params) => {
        <div>
        <div className="cellStatusDelivered"> {params.row.status}</div>
        <div className="cellStatusPending"> {params.row.status}</div>
        </div>
         },
    },
];

export const deliveryRows = [
    {
    id:'1',
    invoiceNo: 'vh-001',
    customerName: 'John Doe',
    address: 'No. 1, Jalan 1, Taman 1, 12345, Kuala Lumpur',
    payment: 'Cash',
    status: 'Delivered',
    },
    {
    id:'2',
    invoiceNo: 'vh-002',
    customerName: 'Jane Doe',
    address: 'No. 2, Jalan 2, Taman 2, 12345, Kuala Lumpur',
    payment: 'Credit Card',
    status: 'Delivered',
    },
];