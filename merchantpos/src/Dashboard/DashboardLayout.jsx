import React, { useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom"; // Import Outlet
import DashboardNavbar from "./DashboardNavbar";
import Carousel from "./Carousel";
import Sidebar from "./Sidebar/Sidebar";
import { useSelector } from "react-redux";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import UpdateProduct from "./POS/UpdateProduct";

const DashboardLayout = () => {
  const isFlipped = useSelector((state) => state.flip.isFlipped);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "#E0E0E0",
      }}
    >
      <DashboardNavbar />
      <Carousel />
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            flex: 1,
            bgcolor: "#E0E0E0",
            py: 2,
            px: {
              xs: 1,
              md: 6,
            },
          }}
        >
          <Outlet />
        </Box>
        <Box
          sx={{
            width: "250px",
            bgcolor: "#FFFFFF",
            display: { xs: "none", sm: "flex" },
            mt: 2,
            transition: "transform 0.6s",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Rotate halfway for a flip effect
            position: "relative",
            perspective: "1000px", // Adds depth to the 3D flip effect
          }}
        >
          <Box
            sx={{
              position: "absolute",
              // backfaceVisibility: "hidden", // Hides the back face during flip
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)", // Flip effect
            }}
          >
            {isFlipped ? <UpdateProduct /> : <Sidebar />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
