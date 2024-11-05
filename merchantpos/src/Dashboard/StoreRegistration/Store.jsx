import React, { useEffect } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import coverPage from "../../assets/store.png";
import axios from "axios";
import { BaseUrl } from "../../component/BaseUrl/url";
import { useSelector } from "react-redux";

const Store = () => {
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);

  const getAllMerchant = async () => {
    try {
      const res = await axios.get(`${BaseUrl}/api/v1/users/allmerchants`);
      console.log("allmerchants", res.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getAllMerchant();
  });
  return (
    <Stack spacing={1} component={Paper} elevation={3}>
      <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
        <Typography sx={{ fontSize: "35px", fontWeight: 700 }}>
          Link your store
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
        <Button
          variant="contained"
          color="success"
          // sx={{ textTransform: "lowercase" }}
          onClick={() => navigate("/dashboard/storeregistration")}
        >
          Add Store
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          py: 2,
        }}
      >
        <Box
          sx={{
            width: "400px",
          }}
        >
          <img src={coverPage} alt="cover page" style={{ width: "100%" }} />
        </Box>
      </Box>
    </Stack>
  );
};

export default Store;
