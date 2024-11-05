import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { navConfig } from "./navconfig";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Sidebar = () => {
  const [openCollapse, setOpenCollapse] = useState(null); // Track open collapse
  const location = useLocation(); // Hook to get the current route
  console.log("location", location);
  // Handle collapse toggle logic
  const handleCollapseToggle = (index) => {
    if (openCollapse === index) {
      setOpenCollapse(null); // Close if already open
    } else {
      setOpenCollapse(index); // Open new and close previous
    }
  };

  return (
    <Stack spacing={10}>
      <Box
        sx={{
          width: 250,
          bgcolor: "#f5f5f5",
          display: { xs: "none", sm: "block" },
          overflowY: "auto",
        }}
      >
        <List>
          {navConfig.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "route" ? (
                // Normal route
                <ListItem
                  button
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ) : (
                // Collapsible route
                <React.Fragment>
                  <ListItem button onClick={() => handleCollapseToggle(index)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.title} />
                    {openCollapse === index ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse
                    in={openCollapse === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.subRoutes.map((subItem, subIndex) => (
                        <ListItem
                          key={subIndex}
                          button
                          component={Link}
                          to={subItem.path}
                          selected={location.pathname === subItem.path}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={subItem.name} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </List>
      </Box>
      {location.pathname === "/dashboard/pos" && (
        <Stack
          spacing={1.5}
          sx={{
            bgcolor: "#FFEAEA",
          }}
        >
          <Box px={8}>
            <Typography
              sx={{
                textAlign: "center",
                borderBottom: "1px solid gray",
                fontSize: "18px",
              }}
            >
              Cart Total
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100px",
              }}
            >
              <Typography sx={{ textAlign: "start" }}>Sub Total</Typography>
            </Box>
            <Typography>$320</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100px",
              }}
            >
              <Typography>Vat</Typography>
            </Box>
            <Typography>$24</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100px",
              }}
            >
              <Typography sx={{ textAlign: "start" }}>Total Amount</Typography>
            </Box>
            <Typography>$61.99</Typography>
          </Box>
          <Box px={1}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              endIcon={<ArrowForwardIcon />}
              sx={{
                "&:hover": {
                  bgcolor: "#52760A",
                },
              }}
            >
              Generate Invoice
            </Button>
          </Box>
        </Stack>
      )}
    </Stack>
  );
};

export default Sidebar;
