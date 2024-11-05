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
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import axios from "axios";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RoleCreation from "./RoleCreation";
import { hideLoader, showLoader } from "../../ReduxToolkit/Slices/loaderSlice";
import { showSnackbar } from "../../ReduxToolkit/Slices/snackbarSlice";
import dataFormatter from "../../component/DataFormatter/dataFormatter";
import Table from "../../component/Table/Table";
import CustomToolbar from "../../component/CustomToolbar/CustomToolbar";
import { useNavigate } from "react-router-dom";
import { dummyUsers } from "../../component/DummyData/users";
import {
  ColumnHeader,
  fontColor,
} from "../../component/GlobelStyles/commonStyle";

const AllStaff = () => {
  const [openmodal, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // for pagination
  const [paginationData, setPaginationData] = useState({
    limitPerPage: 5,
    totalData: 5,
    totalPages: 1,
    currentPage: 1,
  });
  // const [users, setUsers] = useState([]);
  // const getAllUsers = async () => {
  //   dispatch(showLoader());
  //   try {
  //     const res = await axios.get(
  //       `/api/auth/adminAuth/get/all/users?limitPerPage=${paginationData.limitPerPage}&pageNo=${paginationData.currentPage}`
  //     );
  //     console.log("all users", res?.data);
  //     setUsers(res?.data?.allUsers);
  //     setPaginationData(res?.data?.pageInfo);
  //     if (res?.data.success) {
  //       dispatch(hideLoader());
  //     }
  //   } catch (error) {
  //     dispatch(
  //       showSnackbar({
  //         message: `${error?.response.data.message} !`,
  //         severity: "error",
  //       })
  //     );
  //     dispatch(hideLoader());
  //   }
  // };
  // useEffect(() => {
  //   getAllUsers();
  // }, [paginationData.currentPage, paginationData.limitPerPage]);
  // to set the popover button dynamically
  const [active, setActive] = useState({
    id: "",
    status: false,
  });
  const [preview, setPreview] = useState({ id: "", open: false });
  // It is using in popover
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // Configuration object
  const config = {
    staticKeys: {
      SrNo: (item, index) =>
        `${
          index +
          paginationData.currentPage * paginationData.limitPerPage -
          paginationData.limitPerPage +
          1
        }`,
      name: (item, index) => `${item.firstName + item.lastName}`,
    },
  };
  const formattedUserData = dataFormatter(dummyUsers, config);
  // to change pagination
  const changePage = (currentPage) => {
    setPaginationData({ ...paginationData, currentPage });
  };
  // to change pageSize
  const changePageSize = (limitPerPage) => {
    setPaginationData({ ...paginationData, currentPage: 1, limitPerPage });
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDialog({
      open: false,
      title: "",
      buttonText: "",
      data: {
        id: null,
      },
    });
  };
  const columns = [
    {
      field: "SrNo",
      // headerName: <Typography fontSize="15px">Sr.No</Typography>,
      width: 85,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Sr.No</Typography>,
      renderCell: (params) => {
        return (
          <Typography
            fontSize="15px"
            sx={{
              py: 1,
            }}
          >
            {params.value}
          </Typography>
        );
      },
    },
    {
      field: "name",
      // headerName: <Typography fontSize="15px">Name</Typography>,
      width: 245,
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Name</Typography>,
      renderCell: (params) => {
        return (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              // alt="userProfile"
              // src={params.row.profilePicture.imageUrl}
              sx={{ width: "30px", height: "33.5px" }}
            />
            <Typography
              sx={{
                ...fontColor,
                fontWeight: 400,
                py: 1,
                ml: 2,
                cursor: "pointer",
              }}
            >
              {params.value === ""
                ? "N/A"
                : params.value
                    .split(" ")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "phoneNumber",
      // headerName: <Typography fontSize="15px">Phone No</Typography>,
      width: 145,
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Phone No</Typography>,
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
      field: "email",
      // headerName: <Typography fontSize="15px">Total Score</Typography>,
      width: 120,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      flex: 1,
      renderHeader: () => <Typography sx={ColumnHeader}>Email</Typography>,
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
      field: "role",
      // headerName: <Typography fontSize="15px">Buzz Receive</Typography>,
      align: "center",
      headerAlign: "center",
      width: 120,
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Role</Typography>,
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
      field: "status",
      width: 140,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      renderHeader: () => <Typography sx={ColumnHeader}>Status</Typography>,
      renderCell: (params) => {
        return (
          <>
            <Box width="100%">
              <Chip
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
              />
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
                icon="la:eye-solid"
                style={{ fontSize: "30px", cursor: "pointer" }}
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
  return (
    <Box component={Paper} elevation={3} p={3}>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "black", fontWeight: 600 }}>
            STAFF
          </Typography>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            size="small"
            sx={{ ml: 1 }}
            onClick={() => navigate("/dashboard/staffCreation")}
          >
            Add Staff
          </Button>
        </Box>
        <Box>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create Role
          </Button>
        </Box>
      </Box>
      <Stack direction={"column"}>
        <Box mt={2}>
          {formattedUserData?.length === 0 ? (
            "No data found"
          ) : (
            <Table
              rows={formattedUserData}
              columns={columns}
              CustomToolbar={() =>
                CustomToolbar(paginationData, changePageSize)
              }
              pageCount={paginationData.totalPages}
              pageInfo={paginationData}
              changePage={changePage}
            />
          )}
        </Box>
      </Stack>
      {openmodal && (
        <RoleCreation open={openmodal} handleClose={() => setOpen(false)} />
      )}
    </Box>
  );
};

export default AllStaff;
