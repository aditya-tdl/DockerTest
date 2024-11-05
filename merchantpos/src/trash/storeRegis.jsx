// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Grid from "@mui/material/Grid2";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import styled from "@emotion/styled";
// import { Check } from "@mui/icons-material";
// import CheckIcon from "@mui/icons-material/Check";
// import { Icon } from "@iconify/react";
// import {
//   Box,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   FormGroup,
//   IconButton,
//   InputAdornment,
//   Stack,
//   StepConnector,
//   stepConnectorClasses,
//   Step,
//   StepLabel,
//   Stepper,
//   Typography,
//   Divider,
//   Paper,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// const steps = ["Personal info", "Password Setup"];

// const ConnecterComponent = ({ activeStep, errorMessage }) => {
//   return (
//     <Box
//       sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}
//     >
//       <Box
//         sx={{
//           width: "15px",
//           height: "15px",
//           borderRadius: "50%",
//           bgcolor: "#51B56D",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {activeStep === 1 && errorMessage === "" ? (
//           <CheckIcon
//             sx={{
//               fontSize: "12px",
//               borderRadius: "50%",
//               color: "#fff",
//               fontWeight: 600,
//             }}
//           />
//         ) : (
//           <Box
//             sx={{
//               width: "10px",
//               height: "10px",
//               borderRadius: "50%",
//               backgroundColor: "#fff",
//             }}
//           />
//         )}
//       </Box>

//       <Box
//         sx={{ width: "200px", height: "4px", backgroundColor: "#51B56D42" }}
//       />
//       <Box
//         sx={{
//           width: "15px",
//           height: "15px",
//           borderRadius: "50%",
//           bgcolor: "#51B56D",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Box
//           sx={{
//             width: "10px",
//             height: "10px",
//             borderRadius: "50%",
//             backgroundColor: "#fff",
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// const StoreRegistration = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     companyName: "",
//     ownerName: "",
//     phone: "",
//     termsAccepted: false,
//     email: "",
//     registration: "",
//     landmark: "",
//     address1: "",
//     address2: "",
//     city: "",
//     country: "",
//     region: "",
//     postalCode: "",
//   });
//   // State for stepper and validation
//   const [activeStep, setActiveStep] = useState(0);
//   const [errorMessage, setErrorMessage] = useState("");

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };
//   // Handle form submission for each step
//   const handleNext = () => {
//     if (activeStep === 0) {
//       // Validate personal info step
//       if (
//         !formData.companyName ||
//         !formData.ownerName ||
//         !formData.phone ||
//         !formData.email ||
//         !formData.registration ||
//         !formData.termsAccepted
//       ) {
//         setErrorMessage("Please complete all fields and accept terms.");
//         return;
//       }
//     } else {
//       submitForm();
//     }

//     // Clear error and move to next step
//     setErrorMessage("");
//     setActiveStep((prevStep) => prevStep + 1);
//   };
//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };

//   const submitForm = async () => {
//     console.log("handle Registration");
//     console.log("formData", formData);
//   };
//   return (
//     <Grid
//       component={Paper}
//       elevation={3}
//       container
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Grid
//         item
//         xs={12}
//         sm={5}
//         md={6}
//         sx={{
//           width: { sm: "40%", xs: "85%" },
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           py: 4,
//         }}
//       >
//         <Grid item xs={12} sm={5} md={6}>
//           <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <ConnecterComponent
//               activeStep={activeStep}
//               errorMessage={errorMessage}
//             />
//           </Box>
//           <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//             {/* Your icon components here */}
//           </Box>

//           {errorMessage && (
//             <Typography color="error">{errorMessage}</Typography>
//           )}

//           {/* Step 1 - Store Registration */}
//           {activeStep === 0 && (
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Company Name"
//                   name="companyName"
//                   fullWidth
//                   margin="normal"
//                   required
//                   value={formData.companyName}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Owner's Name"
//                   name="ownerName"
//                   fullWidth
//                   margin="normal"
//                   required
//                   value={formData.ownerName}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Email"
//                   name="email"
//                   fullWidth
//                   margin="normal"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Phone"
//                   name="phone"
//                   fullWidth
//                   margin="normal"
//                   required
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Registration Number"
//                   name="registration"
//                   fullWidth
//                   margin="normal"
//                   required
//                   value={formData.registration}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControl>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={formData.termsAccepted}
//                         onChange={handleChange}
//                         name="termsAccepted"
//                       />
//                     }
//                     label="I agree to all the Terms and Privacy Policies"
//                   />
//                 </FormControl>
//               </Grid>
//             </Grid>
//           )}

//           {/* Step 2 - Address Details */}
//           {activeStep === 1 && (
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Postal Code"
//                   name="postalCode"
//                   fullWidth
//                   margin="normal"
//                   value={formData.postalCode}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Country"
//                   name="country"
//                   fullWidth
//                   margin="normal"
//                   value={formData.country}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Region"
//                   name="region"
//                   fullWidth
//                   margin="normal"
//                   value={formData.region}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="City"
//                   name="city"
//                   fullWidth
//                   margin="normal"
//                   value={formData.city}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Address Line 1"
//                   name="address1"
//                   fullWidth
//                   margin="normal"
//                   value={formData.address1}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Address Line 2"
//                   name="address2"
//                   fullWidth
//                   margin="normal"
//                   value={formData.address2}
//                   onChange={handleChange}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   label="Landmark"
//                   name="landmark"
//                   fullWidth
//                   margin="normal"
//                   value={formData.landmark}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//           )}

//           {/* Stepper navigation buttons */}
//           <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
//             <Button disabled={activeStep === 0} onClick={handleBack}>
//               Back
//             </Button>
//             <Button variant="contained" size="small" onClick={handleNext}>
//               {activeStep === steps.length - 1 ? "Create Store" : "Next"}
//             </Button>
//           </Box>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default StoreRegistration;
