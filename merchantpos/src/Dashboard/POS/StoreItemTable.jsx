import * as React from "react";
import { Pagination, Stack, Typography, Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
const tableTitle = () => {
  return (
    <Box sx={{ py: 2, px: 4 }}>
      <Typography sx={{ color: "#191C1F", fontWeight: 500, fontSize: "18px" }}>
        Shopping Cart
      </Typography>
    </Box>
  );
};
const StoreItemTable = ({ rows, columns }) => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "auto",
      }}
    >
      <DataGrid
        rows={rows}
        getRowId={(row) => row.itemId}
        columns={columns}
        // checkboxSelection
        // disableRowSelectionOnClick
        hideFooterPagination
        hideFooter
        slots={{
          toolbar: tableTitle,
        }}
        sx={{
          width: "fit-content",
          minWidth: "100%",
          fontWeight: 400,
          color: "#344767",
          "&.MuiDataGrid-root .MuiDataGrid-columnHeader:focus, &.MuiDataGrid-root .MuiDataGrid-cell:focus":
            {
              outline: "none",
            },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#F4F6F8 !important",
            color: "black",
            // position: "sticky",
            top: 0,
            zIndex: 1,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bold",
            color: "rgba(102, 102, 102, 1)",
            fontSize: "16px",
          },
        }}
        disableColumnMenu
      />
    </Box>
  );
};

export default StoreItemTable;
