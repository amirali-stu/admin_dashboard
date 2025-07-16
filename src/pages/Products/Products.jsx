import React, { useState, useEffect } from "react";
import { productRows } from "../../components/Datas/Datas";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { HandleDelete } from "../../components/handleDelete/HandleDelete";
import RTLAlert from "../../components/RTLAlert/RTLAlert";

function Products({
  showAlert,
  setShowAlert,

  dataDel: userNameDel,
  setDataDel: setNameDel,
}) {
  const [productDatas, setProductDatas] = useState(productRows);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false); // فقط بار اول false بشه
    } else {
      setShowAlert(true); // از بار دوم به بعد
    }
  }, [productDatas]);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "productName",
      headerName: "productName",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="flex w-full h-full items-center gap-x-2">
              <img
                src={params.row.avatar}
                alt="user profile"
                className="w-8 h-8"
              />
              <p>{params.row.productName}</p>
            </div>
          </Link>
        );
      },
    },
    {
      field: "price",
      headerName: "transaction",
      width: 150,
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
                HandleDelete(
                  params.row.id,
                  productDatas,
                  setProductDatas,
                  "product"
                )
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

  return (
    <div className="w-[100%] px-4">
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={productDatas}
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
      </Box>
      {showAlert && (
        <RTLAlert
          active={showAlert}
          onClose={() => setShowAlert(false)}
          message={`Product "${userNameDel}" deleted successfully !`}
          severity="success"
        />
      )}
    </div>
  );
}

export default Products;
