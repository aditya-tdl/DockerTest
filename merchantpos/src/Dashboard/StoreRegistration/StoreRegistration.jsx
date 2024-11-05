import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Check } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { Icon } from "@iconify/react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Stack,
  StepConnector,
  stepConnectorClasses,
  Step,
  StepLabel,
  Stepper,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const steps = ["Personal info", "Password Setup"];

const ConnecterComponent = ({ activeStep, errorMessage }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
    >
      <Box
        sx={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          bgcolor: "#51B56D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {activeStep === 1 && errorMessage === "" ? (
          <CheckIcon
            sx={{
              fontSize: "12px",
              borderRadius: "50%",
              color: "#fff",
              fontWeight: 600,
            }}
          />
        ) : (
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          />
        )}
      </Box>

      <Box
        sx={{ width: "200px", height: "4px", backgroundColor: "#51B56D42" }}
      />
      <Box
        sx={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          bgcolor: "#51B56D",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#fff",
          }}
        />
      </Box>
    </Box>
  );
};

const StoreRegistration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    scheme: "",
    status: "",
    registration: "",
    landmark: "",
    address1: "",
    address1_ar: "",
    address2: "",
    address2_ar: "",
    building_no_en: "",
    building_no_ar: "",
    additional_no_en: "",
    additional_no_ar: "",
    city: "",
    city_ar: "",
    country: "",
    country_code_ar: "",
    region: "",
    state_ar: "",
    postalCode: "",
    postal_code_ar: "",
    district_en: "",
    district_ar: "",
  });
  // State for stepper and validation
  const [activeStep, setActiveStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Handle form submission for each step
  const handleNext = () => {
    if (activeStep === 0) {
      // Validate personal info step
      if (
        !formData.companyName ||
        !formData.scheme ||
        !formData.status ||
        !formData.registration
      ) {
        setErrorMessage("Please complete all fields");
        return;
      }
    } else {
      submitForm();
    }

    // Clear error and move to next step
    setErrorMessage("");
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const submitForm = async () => {
    console.log("handle Registration");
    console.log("formData", formData);
  };
  return (
    <Box component={Paper} elevation={3} py={4}>
      <Stack>
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={5}
            md={6}
            sx={{
              width: { sm: "40%", xs: "85%" },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={5} md={6}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ConnecterComponent
                  activeStep={activeStep}
                  errorMessage={errorMessage}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: ".5rem",
                    paddingTop: "2rem",
                  }}
                >
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      icon="prime:book"
                      style={{
                        fontSize: "40px",
                        textAlign: "center",
                        color: "#2DB224",
                      }}
                    />
                    <Typography sx={{ fontWeight: 500 }}>Store info</Typography>
                  </Stack>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    paddingTop: "2rem",
                    gap: ".5rem",
                    filter: activeStep === 0 ? "blur(.5px)" : "none", // Apply blur based on activeStep
                    transition: "filter 0.5s ease",
                  }}
                >
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      icon="solar:box-bold"
                      style={{
                        fontSize: "40px",
                        textAlign: "center",
                        color: "#2DB224",
                      }}
                    />
                    <Typography sx={{ fontWeight: 500 }}>Address</Typography>
                  </Stack>
                </div>
              </Box>
              {/* Display error message */}
              {errorMessage && (
                <Typography color="error">{errorMessage}</Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
        {activeStep === 0 && (
          <Stack
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: 3,
                justifyContent: "start",
                ml: -3,
              }}
            >
              <Typography
                sx={{ fontWeight: 600, fontSize: "25px", textAlign: "start" }}
              >
                Store Registration
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "12px", md: "15px" },
                  textAlign: "start",
                }}
              >
                Let’s get you all setup so you can access your personal store.{" "}
              </Typography>
            </Box>

            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  label="Store Name"
                  name="companyName"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Scheme"
                  name="scheme"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.scheme}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  label="Status"
                  name="status"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.status}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Registration Number"
                  name="registration"
                  fullWidth
                  margin="normal"
                  required
                  value={formData.registration}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* Stepper navigation buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                width: { md: "30%", xs: "75%" },
              }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" size="small" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Create Store" : "Next"}
              </Button>
            </Box>
          </Stack>
        )}
        {activeStep === 1 && (
          <Stack
            spacing={2}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: 3,
                justifyContent: "start",
                ml: -3,
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
                Address Details
              </Typography>
              <Typography
                sx={{ fontWeight: 500, fontSize: { xs: "12px", md: "15px" } }}
              >
                Let’s get you all setup so you can access your personal store.{" "}
              </Typography>
            </Box>

            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  label="Postal Code"
                  name="postalCode"
                  fullWidth
                  margin="normal"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Country"
                  name="country"
                  fullWidth
                  margin="normal"
                  value={formData.country}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  label="Region"
                  name="region"
                  fullWidth
                  margin="normal"
                  value={formData.region}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="ولاية"
                  name="state_ar"
                  fullWidth
                  margin="normal"
                  value={formData.state_ar}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={8}>
                <TextField
                  label="City"
                  name="city"
                  fullWidth
                  margin="normal"
                  value={formData.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  label="مدينة"
                  name="city_ar"
                  fullWidth
                  margin="normal"
                  value={formData.city_ar}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  label="Address Line 1"
                  name="address1"
                  fullWidth
                  margin="normal"
                  value={formData.address1}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="العنوان (بالعربية) "
                  name="address1_ar"
                  fullWidth
                  margin="normal"
                  value={formData.address1_ar}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={8}>
                <TextField
                  label="Address Line 2"
                  name="address2"
                  fullWidth
                  margin="normal"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="العنوان ٢ (بالعربية)"
                  name="address2_ar"
                  fullWidth
                  margin="normal"
                  value={formData.address2_ar}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={6}>
                <TextField
                  label="Additional No"
                  name="additional_no_en"
                  fullWidth
                  margin="normal"
                  value={formData.additional_no_en}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="رقم إضافي"
                  name="additional_no_ar"
                  fullWidth
                  margin="normal"
                  value={formData.additional_no_ar}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={12} md={8}>
                <TextField
                  label="Address Line 2"
                  name="building_no_ar"
                  fullWidth
                  margin="normal"
                  value={formData.address2}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="العنوان ٢ (بالعربية)"
                  name="address2_ar"
                  fullWidth
                  margin="normal"
                  value={formData.address2_ar}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={2}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Grid
                item
                sx={{
                  width: {
                    xs: "50%",
                    md: "40%",
                  },
                }}
              >
                <TextField
                  label="Landmark"
                  name="landmark"
                  fullWidth
                  margin="normal"
                  value={formData.landmark}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>

            {/* Stepper navigation buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 1,
                width: { md: "30%", xs: "75%" },
              }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" size="small" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Create Store" : "Next"}
              </Button>
            </Box>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default StoreRegistration;
