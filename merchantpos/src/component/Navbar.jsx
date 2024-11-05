import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Chip, Typography } from "@mui/material";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: { xs: 1, md: 5 },
        height: "80px",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { xs: "100px", md: "200px" },
        }}
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          alt="Zatak Icon"
          style={{ width: "100%", cursor: "pointer" }}
        />
      </Box>
      <Box />
      <Box />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Chip
          label="login"
          onClick={() => navigate("/login")}
          sx={{
            bgcolor: "#51B56D",
            color: "white",
            "&:hover": {
              bgcolor: "#51B56D",
              color: "white",
            },
          }}
        />
        <Chip
          label="Sign Up"
          onClick={() => navigate("/signup")}
          sx={{
            ml: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
