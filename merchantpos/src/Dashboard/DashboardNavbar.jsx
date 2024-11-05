import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  Badge,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";

const DashboardNavbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  // const user = {
  //   name: "Admin",
  //   avatarUrl: "https://via.placeholder.com/150", // Replace with actual avatar URL
  // };

  // Handle Drawer
  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };
  return (
    <>
      <AppBar
        position="static"
        sx={{ bgcolor: "white", color: "black", height: "70px" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left - Logo */}
          <Box
            sx={{
              width: { xs: "100px", md: "200px" },
            }}
          >
            <img
              src={logo}
              alt="Zatak Icon"
              style={{ width: "100%", cursor: "pointer" }}
            />
          </Box>

          {/* Right - Notification & Avatar or Menu icon */}
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon sx={{ color: "#3D42DF" }} />
              </Badge>
            </IconButton>
            <Box sx={{ ml: 2, display: "flex", alignItems: "center" }}>
              <Avatar src={user.avatarUrl} alt={user.name_en} />
              <Typography sx={{ ml: 1 }}>{user.name_en}</Typography>
            </Box>
          </Box>

          {/* Menu Icon for smaller screens */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton color="inherit" onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Box sx={{ width: 230, p: 2 }}>
          {/* Close Icon */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* User Info */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Avatar
              src="https://via.placeholder.com/150"
              alt={user.name}
              sx={{ width: 56, height: 56 }}
            />
            <Typography variant="h6" sx={{ ml: 2 }}>
              {user.name}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />
          {/* Additional Drawer Content (e.g., links, options) */}
        </Box>
      </Drawer>
    </>
  );
};

export default DashboardNavbar;
