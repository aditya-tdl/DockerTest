import React, { useState } from "react";
import ModalComponent from "../../component/ModalComponent/ModalComponent";
import { Box, Paper, Stack } from "@mui/material";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const RoleCreation = ({ open, handleClose }) => {
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [permissions, setPermissions] = useState({
    pos: false,
    invoice: false,
    dashboard: false,
    users: false,
  });
  // Handle text field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "roleName") {
      setRoleName(value);
    } else if (name === "roleDescription") {
      setRoleDescription(value);
    }
  };

  // Handle checkbox changes for permissions
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setPermissions((prevPermissions) => ({
      ...prevPermissions,
      [name]: checked,
    }));
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the form data to submit
    const formData = {
      roleName,
      roleDescription,
      permissions,
    };

    console.log("Form Data:", formData);
    setRoleName("");
    setRoleDescription("");
    setPermissions({
      pos: false,
      invoice: false,
      dashboard: false,
      users: false,
    });
    handleClose();

    // You can submit this data to your backend or further process it here
  };
  return (
    <ModalComponent open={open}>
      <Stack
        component={Paper}
        elevation={3}
        sx={{
          maxWidth: 500,
          margin: "auto",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{ display: "flex", justifyContent: "end", alignItems: "center" }}
        >
          <CloseIcon onClick={handleClose} />
        </Box>

        <Box>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: 550, color: "gray" }}
          >
            Create Role
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Role Name */}
            <TextField
              fullWidth
              label="Role Name"
              name="roleName"
              value={roleName}
              onChange={handleInputChange}
              margin="normal"
              required
            />

            {/* Role Description */}
            <TextField
              fullWidth
              label="Role Description"
              name="roleDescription"
              value={roleDescription}
              onChange={handleInputChange}
              margin="normal"
              required
            />

            {/* Permissions */}
            <Typography variant="h6" gutterBottom>
              Assign Permissions
            </Typography>

            {/* POS Permission */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <label>POS</label>
              <Checkbox
                name="pos"
                checked={permissions.pos}
                onChange={handleCheckboxChange}
              />
            </Box>

            {/* Invoice Permission */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <label>Invoice</label>
              <Checkbox
                name="invoice"
                checked={permissions.invoice}
                onChange={handleCheckboxChange}
              />
            </Box>

            {/* Dashboard Permission */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <label>Dashboard</label>
              <Checkbox
                name="dashboard"
                checked={permissions.dashboard}
                onChange={handleCheckboxChange}
              />
            </Box>

            {/* Users Permission */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 1,
              }}
            >
              <label>Users</label>
              <Checkbox
                name="users"
                checked={permissions.users}
                onChange={handleCheckboxChange}
              />
            </Box>

            {/* Submit Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
              >
                Create Role
              </Button>
              <Button
                variant="outlined"
                size="small"
                sx={{ ml: 1 }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Stack>
    </ModalComponent>
  );
};

export default RoleCreation;
