import React, { useState, useEffect } from "react";
import {
  Avatar,
  Box,
  Chip,
  Paper,
  Popover,
  Stack,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { hideLoader, showLoader } from "../../ReduxToolkit/Slices/loaderSlice";
import { showSnackbar } from "../../ReduxToolkit/Slices/snackbarSlice";
import dataFormatter from "../../component/DataFormatter/dataFormatter";
import Table from "../../component/Table/Table";
import CustomToolbar from "../../component/CustomToolbar/CustomToolbar";
import { useNavigate } from "react-router-dom";
import {
  ColumnHeader,
  fontColor,
} from "../../component/GlobelStyles/commonStyle";
import { BaseUrl } from "../../component/BaseUrl/url";
import StoreItemTable from "./StoreItemTable";
import { setFlip, toggleFlip } from "../../ReduxToolkit/Slices/flipSlice";
const items = [
  {
    itemId: "AB001",
    itemName: "4K UHD LED Smart TV with Chromecast Built-in",
    price: "$700",
    vat: "$50",
  },
  {
    itemId: "AB002",
    itemName: "Bluetooth Noise Cancelling Headphones",
    price: "$120",
    vat: "$8",
  },
  {
    itemId: "AB003",
    itemName: "Wireless Ergonomic Keyboard and Mouse Combo",
    price: "$45",
    vat: "$3",
  },
  {
    itemId: "AB004",
    itemName: "Portable External Hard Drive - 1TB",
    price: "$60",
    vat: "$4",
  },
  {
    itemId: "AB005",
    itemName: "Smart Home Voice Assistant Speaker",
    price: "$55",
    vat: "$3.5",
  },
  {
    itemId: "AB006",
    itemName: "USB-C Fast Charging Power Bank - 10000mAh",
    price: "$30",
    vat: "$2",
  },
  {
    itemId: "AB007",
    itemName: "Gaming Mouse with RGB Lighting",
    price: "$25",
    vat: "$1.5",
  },
  {
    itemId: "AB008",
    itemName: "1080p Full HD Webcam with Microphone",
    price: "$40",
    vat: "$2.5",
  },
  {
    itemId: "AB009",
    itemName: "Smart Thermostat with App Control",
    price: "$150",
    vat: "$10",
  },
  {
    itemId: "AB010",
    itemName: "Noise-Cancelling Wireless Earbuds",
    price: "$80",
    vat: "$5",
  },
];
const Allproducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [randomProductCode, setRandomProductCode] = useState("");
  // for pagination
  const [paginationData, setPaginationData] = useState({
    limitPerPage: 10,
    totalData: 5,
    totalPages: 1,
    currentPage: 1,
  });
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    dispatch(showLoader());
    try {
      const res = await axios.get(
        `${BaseUrl}/api/v1/product?limitPerPage=${paginationData.totalData}&pageNo=${paginationData.currentPage}`
      );
      // console.log("all product", res?.data);
      setProducts(res?.data?.allproducts);
      setPaginationData(res?.data?.pageInfo);
      if (res?.data.success) {
        dispatch(hideLoader());
      }
    } catch (error) {
      dispatch(
        showSnackbar({
          message: `${error?.response.data.message} !`,
          severity: "error",
        })
      );
      dispatch(hideLoader());
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [paginationData.currentPage, paginationData.limitPerPage]);
  const barcodeUrl = `https://bwipjs-api.metafloor.com/?bcid=code128&text=${randomProductCode}`;
  const config = {
    staticKeys: {
      SrNo: (item, index) =>
        `${
          index +
          paginationData.currentPage * paginationData.limitPerPage -
          paginationData.limitPerPage +
          1
        }`,
    },
  };
  const formattedData = dataFormatter(items, config);
  // to change pagination
  const changePage = (currentPage) => {
    setPaginationData({ ...paginationData, currentPage });
  };
  // to change pageSize
  const changePageSize = (limitPerPage) => {
    setPaginationData({ ...paginationData, currentPage: 1, limitPerPage });
  };
  const handleEdit = (data) => {
    dispatch(toggleFlip({ data }));
    // dispatch(setFlip({ isFlipped: true, data }));
  };
  const columns = [
    // {
    //   field: "SrNo",
    //   // headerName: <Typography fontSize="15px">Sr.No</Typography>,
    //   width: 85,
    //   align: "center",
    //   headerAlign: "center",
    //   sortable: false,
    //   filterable: false,
    //   renderHeader: () => <Typography sx={ColumnHeader}>Sr.No</Typography>,
    //   renderCell: (params) => {
    //     return (
    //       <Typography
    //         fontSize="15px"
    //         sx={{
    //           py: 1,
    //         }}
    //       >
    //         {params.value}
    //       </Typography>
    //     );
    //   },
    // },
    {
      field: "itemId",
      // headerName: <Typography fontSize="15px">Name</Typography>,
      // width: 145,
      sortable: false,
      filterable: false,
      // headerAlign: "center",
      renderHeader: () => <Typography sx={ColumnHeader}>Item Id</Typography>,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                ...fontColor,
                fontWeight: 400,
                py: 1,
                ml: 2,
                cursor: "pointer",
              }}
            >
              {params.value === "" ? "N/A" : params.value}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "itemName",
      // headerName: <Typography fontSize="15px">Phone No</Typography>,
      width: 145,
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      renderHeader: () => (
        <Typography sx={ColumnHeader}>Product Name</Typography>
      ),
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              ...fontColor,
              fontWeight: 400,
              py: 1.6,
            }}
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "price",
      // headerName: <Typography fontSize="15px">Total Score</Typography>,
      width: 120,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      flex: 1,
      renderHeader: () => <Typography sx={ColumnHeader}>Price</Typography>,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              ...fontColor,
              fontWeight: 400,
              py: 1.6,
            }}
          >
            {params.value ? params.value : "N/A"}
          </Typography>
        );
      },
    },
    {
      field: "vat",
      // headerName: <Typography fontSize="15px">Buzz Receive</Typography>,
      align: "center",
      headerAlign: "center",
      width: 120,
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Vat</Typography>,
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              ...fontColor,
              py: 1.6,
              fontWeight: 400,
            }}
          >
            {params.value ? params.value : "N/A"}
          </Typography>
        );
      },
    },
    {
      field: "qut",
      width: 140,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Quantity</Typography>,
      renderCell: (params) => {
        return (
          <>
            <Box width="100%">
              {/* <Chip
                label={params.value}
                color={params.value === "enabled" ? "success" : "error"}
                // label="active"
                // color="success"
                size="small"
                sx={{
                  borderRadius: "5px",
                  minWidth: "6rem",
                  color: "white !important",
                }}
              /> */}
              Quantity
            </Box>
          </>
        );
      },
    },
    {
      field: "subtotal",
      width: 140,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Subtotal</Typography>,
      renderCell: (params) => {
        return (
          <>
            <Box width="100%">
              {/* <Chip
                label={params.value}
                color={params.value === "enabled" ? "success" : "error"}
                // label="active"
                // color="success"
                size="small"
                sx={{
                  borderRadius: "5px",
                  minWidth: "6rem",
                  color: "white !important",
                }}
              /> */}
              Subtotal
            </Box>
          </>
        );
      },
    },
    {
      field: "Action",
      width: 115,
      sortable: false,
      filterable: false,
      align: "center",
      headerAlign: "center",
      flex: 1,
      renderHeader: () => <Typography sx={ColumnHeader}>Action</Typography>,
      renderCell: (params) => {
        return (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 1.2,
              }}
            >
              <Icon
                icon="fluent:edit-32-regular"
                style={{ fontSize: "22px", cursor: "pointer" }}
                onClick={() => handleEdit(params.row)}
              />

              <Icon
                icon="material-symbols:delete-outline"
                style={{ fontSize: "25px", marginLeft: 8 }}
              />
            </Box>
          </>
        );
      },
    },
  ];
  const selectRandomProductCode = () => {
    if (products && products.length > 0) {
      const randomIndex = Math.floor(Math.random() * products.length);
      setRandomProductCode(products[randomIndex].product_code);
    }
  };

  return (
    <Stack spacing={1.5} component={Paper} elevation={3} p={1.5}>
      <Box sx={{ px: 1 }}>
        <TextField
          variant="standard"
          type="text"
          value={randomProductCode}
          readOnly
          label="Barcode Number"
          onMouseEnter={selectRandomProductCode}
          sx={{ cursor: "pointer" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img
                  src={barcodeUrl}
                  alt="Barcode Icon"
                  style={{ width: 50, height: 20 }} // Adjust dimensions as needed
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box mt={2}>
        {formattedData?.length === 0 ? (
          "No data found"
        ) : (
          <StoreItemTable rows={formattedData} columns={columns} />
        )}
      </Box>
    </Stack>
  );
};

export default Allproducts;
