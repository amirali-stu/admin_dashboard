import React, { useState, useEffect } from "react";
import { userRows } from "../../components/Datas/Datas";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { HandleDelete } from "../../components/handleDelete/HandleDelete";
import Button from "@mui/material/Button";
import RTLAlert from "../../components/RTLAlert/RTLAlert";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
function UserList({
  showAlert,
  setShowAlert,
  dataDel: productDel,
  setDataDel: setProductDel,
}) {
  const [userDatas, setUserDatas] = useState(userRows);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false); // فقط بار اول false بشه
    } else {
      setShowAlert(true); // از بار دوم به بعد
      setProductDel("5");
    }
  }, [userDatas]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "username",
      width: 150,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="flex w-full h-full items-center gap-x-2">
              <img
                src={params.row.avatar}
                alt="user profile"
                className="w-8 h-8"
              />
              <p>{params.row.username}</p>
            </div>
          </Link>
        );
      },
    },
    {
      field: "status",
      headerName: "status",
      width: 110,
    },
    {
      field: "transaction",
      headerName: "transaction",
      width: 110,
    },
    {
      field: "lastLogin",
      headerName: "lastLogin",
      width: 110,
    },
    {
      field: "action",
      headerName: "user action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex w-full h-full items-center gap-x-3">
            <div
              onClick={() =>
                HandleDelete(params.row.id, userDatas, setUserDatas, "user")
              }
              className="cursor-pointer"
            >
              <DeleteIcon variant="outlined" color="error" />
            </div>

            <Link to={`/user/${params.row.id}`}>
              <Button
                variant="outlined"
                color="warning"
                startIcon={<EditIcon />}
              >
                Update
              </Button>
            </Link>
          </div>
        );
      },
    },
  ];

  // The datagrid must be responsive.

  return (
    <div className="w-[100%] px-4">
      <Box sx={{ height: 400, width: "100%", overflowX: "auto" }}>
        <div style={{ minWidth: 600 }}>
          <DataGrid
            rows={userDatas}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[2]}
            disableRowSelectionOnClick
          />
        </div>
      </Box>
      {showAlert && (
        <RTLAlert
          active={showAlert}
          onClose={() => setShowAlert(false)}
          message={`User "${productDel}" deleted successfully !`}
          severity="success"
        />
      )}
    </div>
  );
}

export default UserList;
