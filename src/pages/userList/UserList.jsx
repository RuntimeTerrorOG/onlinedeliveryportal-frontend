import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { UserRows } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [data, setData] = useState(UserRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  /*
  useEffect(() => {
    axios.get("http://localhost:8080/admins")
      .then((response) => {
        setAdmins(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

 const handleDelete = (id) => {
  axios.delete(`http://localhost:8080/admins/{id}`)
    .then(() => {
      setAdmins(admins.filter((admin) => admin.id !== id));
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}; */

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "User",
    headerName: "Employee name",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="userListUser">
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "phoneNo",
    headerName: "Phone No ",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <DeleteOutlineIcon
            className="userListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
];

return (
  <div className="userList">
    <DataGrid
      rows={data}
      disableSelectionOnClick
      columns={columns}
      pageSize={8}
      checkboxSelection
    />
  </div>
);
}