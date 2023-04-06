//tempory data for delivery table.later from database

export const deliveryCols = [

    {field:'invoiceNo', headerName:'Invoice No', width: 150},
    {field: 'customerName', headerName: 'Customer Name', width: 200},
    {field:'address', headerName:'Address', width:350},
    {field:'payment', headerName:'Payment', width: 200},
    {field:'status', headerName:'Status', width: 300,
         renderCell: (params) => (
        <div className="status">
        <div className="cellStatusDelivered"> {params.row.cellStatusDelivered}</div>
        <div className="cellStatusPending"> {params.row.cellStatusPending}</div>
        </div>
         ),
    },
];

export const deliveryRows = [
    {
    id:'1',
    invoiceNo: 'vh-001',
    customerName: 'Sumith Perera',
    address: 'No. 10, 1st lane,battaramulla',
    payment: '5000',
    cellStatusDelivered: 'Delivered',
    cellStatusPending: 'Pending',
    },
    {
    id:'2',
    invoiceNo: 'vh-002',
    customerName: 'S.C.W. Herath',
    address: 'No. 221, Jalan,Samagi mawatha, 12345, Kottawa',
    payment: '-',
    cellStatusDelivered: 'Delivered',
    cellStatusPending: 'Pending',
    },
];