import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LandingPageLayout from "../component/ReusableComponent/LandingPageLayout";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import coverPage from "../assets/SIgnup.png";
import styled from "@emotion/styled";
import { Check, Message } from "@mui/icons-material";
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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { BaseUrl } from "../component/BaseUrl/url";
import { asciiToArabicMap } from "../component/Language/EnglishToArabic";
import { showSnackbar } from "../ReduxToolkit/Slices/snackbarSlice";

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
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log("state", state);
  const [fnameAr, setFNameAr] = useState("");
  const [lnameAr, setLNameAr] = useState("");
  const [formData, setFormData] = useState({
    fnameEn: "",
    fnameAr: "",
    lnameEn: "",
    lnameAr: "",
    phone: "",
    vatNumber: "",
    termsAccepted: false,
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({ phone: "", email: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  function convertToArabic(input) {
    return input
      .split("")
      .map((char) => {
        const asciiValue = char.charCodeAt(0);
        return asciiToArabicMap[asciiValue] || char; // Fallback to the original character if not found
      })
      .join("");
  }

  // State for stepper and validation
  const [activeStep, setActiveStep] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (state !== null) {
      setFormData({
        ...formData,
        fnameEn: state.name,
        lnameEn: state.lname,
        phone: state.phone,
      });
      setFNameAr(convertToArabic(state.name));
      setLNameAr(convertToArabic(state.lname));
    }
  }, [state]);

  const handleNameArChange = (event) => {
    setFNameAr(event.target.value);
  };
  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Invalid email address it should be like example@gmail.com",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    } else if (name === "phone") {
      const phonePattern = /^\d{10}$/; // assuming a 10-digit phone number
      if (!phonePattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phone: "Invalid phone number it should be 10 digit",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Perform validation based on field name

    if (name === "fnameEn") {
      setFNameAr(convertToArabic(value));
    }
    if (name === "lnameEn") {
      setLNameAr(convertToArabic(value));
    }
  };
  // Handle form submission for each step
  const handleNext = () => {
    if (activeStep === 0) {
      // Validate personal info step
      if (
        !formData.nameEn ||
        !nameAr ||
        !formData.phone ||
        !formData.vatNumber ||
        !formData.termsAccepted
      ) {
        setErrorMessage("Please complete all fields and accept terms.");
        return;
      }
    } else if (activeStep === 1) {
      // Validate password setup step
      if (!formData.email || !formData.password || !formData.confirmPassword) {
        setErrorMessage("Please complete all password fields.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      // Submit the form via API after last step
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
    try {
      const response = await axios.post(`${BaseUrl}/api/v1/users`, {
        name_en: formData.fnameEn,
        name_ar: fnameAr,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        termsAccepted: formData.termsAccepted,
        vat_no: formData.vatNumber,
      }); // Replace with your API endpoint
      console.log("Form submitted successfully:", response.data);
      dispatch(
        showSnackbar({
          message: "Signup successfully!",
          severity: "success",
        })
      );
      setActiveStep(0);
      navigate("/login");
    } catch (error) {
      setActiveStep(0);

      console.error("Error submitting form:", error);
      dispatch(
        showSnackbar({
          message: error.response.data.message,
          severity: "error",
        })
      );
    }
  };

  return (
    <LandingPageLayout>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 0, md: 5 },
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          md={6}
          sx={{
            width: { sm: "60%", md: "50%" },
            height: { md: "82vh" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          <img
            src={coverPage}
            alt="cover page"
            style={{ width: "53%", height: "100%" }}
          />
        </Grid>
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
                  <Typography sx={{ fontWeight: 500 }}>
                    Personal info
                  </Typography>
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
                    icon="cil:bus-alt"
                    style={{
                      fontSize: "40px",
                      textAlign: "center",
                      color: "#2DB224",
                    }}
                  />
                  <Typography sx={{ fontWeight: 500 }}>
                    Password Set Up
                  </Typography>
                </Stack>
              </div>
            </Box>
            {/* Display error message */}
            {errorMessage && (
              <Typography color="error">{errorMessage}</Typography>
            )}

            {/* Step content */}
            {activeStep === 0 && (
              <Stack pt={4}>
                <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
                  Sign up
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: { xs: "12px", md: "15px" } }}
                >
                  Let’s get you all setup so you can access your personal
                  account.{" "}
                </Typography>
                <TextField
                  label="First Name"
                  name="fnameEn"
                  fullWidth
                  margin="normal"
                  value={formData.fnameEn}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Arabic first Name"
                  name="fnameAr"
                  fullWidth
                  lang="ar"
                  margin="normal"
                  // dir="rtl"
                  value={fnameAr}
                  onChange={handleNameArChange}
                  required
                  // disabled
                />
                <TextField
                  label="Last Name"
                  name="lnameEn"
                  fullWidth
                  margin="normal"
                  value={formData.lnameEn}
                  onChange={handleChange}
                  required
                />
                <TextField
                  label="Arabic last Name"
                  name="lnameAr"
                  fullWidth
                  lang="ar"
                  margin="normal"
                  // dir="rtl"
                  value={lnameAr}
                  onChange={handleNameArChange}
                  required
                  // disabled
                />
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  margin="normal"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  helperText={errors.phone?.length ? errors.phone : ""}
                />
                <TextField
                  label="VAT Number"
                  name="vatNumber"
                  fullWidth
                  margin="normal"
                  value={formData.vatNumber}
                  onChange={handleChange}
                  required
                />
                <FormControl>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        name="termsAccepted"
                      />
                    }
                    label="I accept the terms and conditions"
                    componentsProps={{
                      typography: {
                        sx: {
                          fontSize: { xs: "12px", md: "15px" }, // Adjust font size based on screen size
                        },
                      },
                    }}
                  />
                </FormControl>
              </Stack>
            )}

            {activeStep === 1 && (
              <Stack pt={4} width={"100%"}>
                <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
                  Set Up Password
                </Typography>
                <Typography
                  sx={{ fontWeight: 500, fontSize: { xs: "12px", md: "15px" } }}
                >
                  Let’s get you all setup so you can access your personal
                  account.{" "}
                </Typography>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  helperText={errors.email?.length ? errors.email : ""}
                  onChange={handleChange}
                />
                {/* {errors !== "" && (
                  <span style={{ color: "red" }}>{errors}</span>
                )} */}
                <TextField
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  fullWidth
                  margin="normal"
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"} // Toggle confirm password visibility
                  fullWidth
                  margin="normal"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowConfirmPassword}>
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {formData.confirmPassword !== formData.password &&
                  formData.confirmPassword.length !== 0 && (
                    <span style={{ color: "red" }}>
                      password and confirm password doesn't match
                    </span>
                  )}
              </Stack>
            )}
            <Typography sx={{ py: 1, textAlign: "center" }}>
              Already have an account?{"  "}
              <span
                style={{ color: "#51B56D", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                login
              </span>
            </Typography>
            {/* Stepper navigation buttons */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" size="small" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Create Account" : "Next"}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </LandingPageLayout>
  );
};

export default SignUp;
