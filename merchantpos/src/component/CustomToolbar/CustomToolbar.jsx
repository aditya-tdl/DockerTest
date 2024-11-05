import React from "react";
import {
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
  useGridApiContext,
} from "@mui/x-data-grid";
import FileUploadIcon from "@mui/icons-material/FileUpload";
// import { saveAs } from "file-saver";
import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

// customize filter tool
function CustomToolbar(pageSize, changePageSize) {
  return (
    <Grid
      container
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"row"}
      ml={1}
    >
      <Grid
        item
        xs={12}
        lg={4}
        display={"flex"}
        justifyContent={"start"}
        gap={1}
      >
        {/* Setting Page Size */}
        <PageSizeSetter pageSize={pageSize} changePageSize={changePageSize} />
      </Grid>
      <Grid
        item
        xs={12}
        lg={7}
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <Box
          width="100%"
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchToolbar />
          {/* <Box sx={{ ml: 0.5 }}>
            <ExportToolbar />
          </Box> */}
        </Box>
      </Grid>
    </Grid>
  );
}
// Search Toolbar
export const SearchToolbar = () => (
  <>
    <Box sx={{ display: "flex", alignItems: "center", width: "240px" }}>
      <Typography sx={{ fontSize: "15px" }}>Search</Typography>
      <GridToolbarQuickFilter
        fullWidth
        variant="outlined"
        size="small"
        sx={{
          ml: 1,
          "& .MuiOutlinedInput-root": {
            color: "rgba(158, 158, 158, 1)",
            borderRadius: "10px",
            borderColor: "rgba(158, 158, 158, 1)",
          },
        }}
      />
    </Box>
  </>
);

// Page Size Setter

export const PageSizeSetter = ({ pageSize, changePageSize }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography mr={1} sx={{ fontSize: "15px" }}>
        Show
      </Typography>
      <Select
        sx={{ width: "80px" }}
        fullWidth
        id="select-user-rows"
        variant="outlined"
        value={pageSize.count}
        name="pageSize"
        size="small"
        onChange={(e) => {
          changePageSize(e.target.value);
        }}
      >
        {[6, 10, 20, 30, 50, 100].map((value, index) => (
          <MenuItem key={index} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
      <Typography ml={1} sx={{ fontSize: "15px" }}>
        Entries
      </Typography>
    </Box>
  );
};

// const ExportToolbar = () => {
//   const apiRef = useGridApiContext();
//   //   console.log("get column", apiRef.current.getAllColumns())
//   // console.log("get rows", apiRef.current.getRowModels())

//   const handleExport = () => {
//     // const columns = apiRef.current.getAllColumns().map(col => ({ headerName: col.headerName, field: col.field }));
//     const columns = apiRef.current
//       .getAllColumns()
//       .filter(
//         (col) => col.field !== "Preview" && col.field !== "Action" && col.field
//       );
//     const csvContent = [];
//     console.log("get column", columns);

//     const columnHeaders = columns
//       .map((col) => col.field.split(/(?=[A-Z])/).join(" "))
//       .join(",");
//     csvContent.push(columnHeaders);
//     const rows = apiRef.current.getRowModels();
//     rows.forEach((row) => {
//       const rowData = columns
//         .map((col) => {
//           const value = row[col.field];
//           return (
//             value !== undefined && value !== null && value !== "FALSE" && value
//           );
//         })
//         .join(",");
//       csvContent.push(rowData);
//     });

//     const csvString = csvContent.join("\r\n");
//     // console.log("csvString", csvString); // For debugging purposes
//     const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "data-grid-export.csv");
//     // console.log("blob", blob); // For debugging purposes
//   };
//   return (
//     <GridToolbarContainer>
//       <Box
//         sx={{
//           display: "flex",
//           width: "135px",
//           alignItems: "center",
//           ml: 2,
//           pb: 1,
//           cursor: "pointer",
//           //   border: "1px solid lightgray",
//         }}
//         onClick={handleExport}
//       >
//         <FileUploadIcon sx={{ width: "19px", height: "19px" }} />
//         <Typography sx={{ ml: 1 }}>Export CSV</Typography>
//       </Box>
//     </GridToolbarContainer>
//   );
// };

export default CustomToolbar;
