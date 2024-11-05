import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
  Typography,
  Avatar,
  Paper,
  Stack,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Add } from "@mui/icons-material";

const roles = [
  "Admin",
  "Staff",
  "User",
  "Merchant",
  "Super Admin",
  "Manager",
  "Sales",
  "Support",
  "Accountant",
  "Customer",
];

const StaffCreationForm = () => {
  // Minimal state for form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    status: "", // 'enabled' or 'disabled'
    zipCode: "",
    country: "",
    state: "",
    city: "",
    address: "",
    branchName: "",
    role: "", // Assign role
    profileImage: null, // For image upload
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({ ...prevData, profileImage: file }));
  };

  // Handle status radio buttons (toggle behavior)
  const handleStatusToggle = (statusValue) => {
    setFormData((prevData) => ({
      ...prevData,
      status: prevData.status === statusValue ? "" : statusValue, // Toggle if clicked twice
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data
    console.log(formData);
  };
  // component={"form"} onSubmit={handleSubmit} px={5} py={2}
  return (
    <Box width={"100%"} component={Paper} elevation={3}>
      <Box
        sx={{
          margin: "auto",
          padding: 4,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Add Staff
        </Typography>
        <Box component={"form"} onSubmit={handleSubmit} px={5} py={2}>
          <Grid container spacing={3}>
            {/* First Name */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>First Name</label>
                <TextField
                  fullWidth
                  name="firstName"
                  placeholder="enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Last Name</label>
                <TextField
                  fullWidth
                  name="lastName"
                  placeholder="enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Email */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Email</label>
                <TextField
                  fullWidth
                  name="email"
                  placeholder="enter email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Phone Number */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Phone Number</label>
                <TextField
                  fullWidth
                  name="phoneNumber"
                  placeholder="enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Password */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Password</label>
                <TextField
                  fullWidth
                  name="password"
                  type="password"
                  placeholder="enter password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Confirm Password */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Confirm Password</label>
                <TextField
                  fullWidth
                  name="confirmPassword"
                  placeholder="enter confirm password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Status (Enable/Disable) */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Status</label>
                <RadioGroup row>
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formData.status === "enabled"}
                        onClick={() => handleStatusToggle("enabled")}
                      />
                    }
                    label="Enable"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        checked={formData.status === "disabled"}
                        onClick={() => handleStatusToggle("disabled")}
                      />
                    }
                    label="Disable"
                  />
                </RadioGroup>
              </Stack>
            </Grid>

            {/* ZIP Code */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>ZIP Code</label>
                <TextField
                  fullWidth
                  name="zipCode"
                  placeholder="enter zip code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Country */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Country</label>
                <TextField
                  fullWidth
                  name="country"
                  placeholder="enter country name"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* State */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>State</label>
                <TextField
                  fullWidth
                  name="state"
                  placeholder="enter state name"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* City */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>City</label>
                <TextField
                  fullWidth
                  name="city"
                  placeholder="enter city name"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Address */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Address</label>
                <TextField
                  fullWidth
                  name="address"
                  placeholder="enter address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>

            {/* Branch Name */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Branch Name</label>
                <TextField
                  fullWidth
                  name="branchName"
                  placeholder="enter branch name"
                  value={formData.branchName}
                  onChange={handleInputChange}
                  required
                />
              </Stack>
            </Grid>
            {/* Assign Role */}
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Assign Role</label>
                <FormControl fullWidth>
                  <Select
                    name="role"
                    value={formData.role === "" ? "default" : formData.role}
                    onChange={handleInputChange}
                    required
                    sx={{ minWidth: 200 }}
                  >
                    <MenuItem value="default">
                      <em>Select Staff Role</em>
                    </MenuItem>
                    {roles.map((role, index) => (
                      <MenuItem key={index} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>

            {/* Profile Image Upload */}
            <Grid item xs={12}>
              <Stack spacing={2}>
                <label style={{ fontWeight: 550 }}>Profile Image</label>
                <TextField
                  fullWidth
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Button
                          variant="contained"
                          component="label"
                          size="small"
                          sx={{ mr: 1 }} // Margin right for spacing
                        >
                          Upload
                          <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </Button>
                      </InputAdornment>
                    ),
                    readOnly: true, // Prevent direct input
                  }}
                  value={
                    formData.profileImage ? formData.profileImage.name : ""
                  }
                  placeholder="No file selected"
                />
              </Stack>
            </Grid>
          </Grid>
          {/* Submit Button */}
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 3 }}
              >
                Create Staff
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default StaffCreationForm;
