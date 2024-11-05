import * as React from "react";
import { Pagination, Stack, Typography, Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Table({
  rows,
  columns,
  CustomToolbar,
  changePage,
  pageInfo,
}) {
  const calculateHeight = (height) => {
    switch (height) {
      case 5:
        return 430;
      case 10:
        return 680;
      case 20:
        return 1200;
      case 30:
        return 1710;
      case 50:
        return 2610;
      case 100:
        return 4010;
      default:
        return height * 55;
    }
  };
  const getHeight = calculateHeight(pageInfo.limitPerPage);
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      <DataGrid
        rows={rows}
        getRowId={(row) => row.SrNo}
        columns={columns}
        // checkboxSelection
        // disableRowSelectionOnClick
        hideFooterPagination
        hideFooter
        slots={{
          toolbar: CustomToolbar,
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
      <Stack
        component={Paper}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        // bgcolor={"red"}
      >
        <Typography sx={{ fontSize: "14.36px" }}>{`Showing ${
          (pageInfo?.currentPage - 1) * pageInfo?.limitPerPage + 1
        } to ${Math.min(
          pageInfo?.currentPage * pageInfo?.limitPerPage,
          pageInfo?.totalData
        )} of ${pageInfo?.totalData} entries`}</Typography>

        <Pagination
          count={pageInfo?.totalPages}
          variant="outlined"
          sx={{ float: "right", m: 2 }}
          onChange={(e, page) => changePage(page)}
        />
      </Stack>
    </Box>
  );
}
