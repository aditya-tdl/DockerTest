// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import LandingPageLayout from "../component/ReusableComponent/LandingPageLayout";
// import Grid from "@mui/material/Grid2";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import coverPage from "../assets/SIgnup.png";
// import styled from "@emotion/styled";
// import { Check } from "@mui/icons-material";
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
// } from "@mui/material";
// import CustomizedSteppers from "./CustomizedSteppers";
// const steps = ["", ""];
// // const steps = ["Personal info", "Password Setup"];
// // const pageTitles = ["Cart", "CheckOut", "Complete"];

// const StepperConnector = styled(StepConnector)(({ theme }) => ({
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor: "#51B56D",
//     borderWidth: "4px",
//     borderRadius: "5px",
//     // width:"400px"
//     // backgroundColor: "black",
//   },
// }));
// const StepperIcon = styled("div")(({ theme }) => ({
//   "& .QontoStepIcon-completedIcon": {
//     color: "#fff",
//     zIndex: 1,
//     fontSize: "20px",
//     borderRadius: "50%",
//   },
//   "& .QontoStepIcon-activeIcon": {
//     color: "#fff",
//     zIndex: 1,
//     fontSize: "20px",
//     borderRadius: "50%",
//   },
// }));

// const StepperIconRoot = (props) => {
//   const { active, completed, className, icon } = props;
//   console.log("active", active);
//   console.log("completed", completed);
//   return (
//     <StepperIcon ownerState={{ active }} className={className}>
//       {completed ? (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             flexWrap: "wrap",
//             alignItems: "center",
//             gap: ".5rem",
//             paddingTop: "3rem",
//           }}
//         >
//           <Stack
//             spacing={1}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Icon
//               icon="prime:book"
//               style={{
//                 fontSize: "50px",
//                 textAlign: "center",
//                 color: "#2DB224",
//               }}
//             />
//             <Typography sx={{ fontWeight: 500 }}>Personal info</Typography>
//           </Stack>
//         </div>
//       ) : active ? (
//         <div
//           style={{
//             // borderBottom: "3px solid black",
//             display: "flex",
//             flexDirection: "row",
//             flexWrap: "wrap",
//             alignItems: "center",
//             // paddingBottom: "10rem",
//             gap: ".5rem",
//             paddingTop: "3rem",
//           }}
//         >
//           <Stack
//             spacing={1}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Icon
//               icon="prime:book"
//               style={{
//                 fontSize: "50px",
//                 textAlign: "center",
//                 color: "#2DB224",
//               }}
//             />
//             <Typography sx={{ fontWeight: 500 }}>Personal info</Typography>
//           </Stack>
//         </div>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             flexDirection: "row",
//             flexWrap: "wrap",
//             alignItems: "center",
//             paddingTop: "3rem",
//             gap: ".5rem",
//           }}
//         >
//           <Stack
//             spacing={1}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Icon
//               icon="cil:bus-alt"
//               style={{
//                 fontSize: "50px",
//                 textAlign: "center",
//                 color: "#2DB224",
//               }}
//             />
//             <Typography sx={{ fontWeight: 500 }}>Password Set Up</Typography>
//           </Stack>
//         </div>
//       )}
//     </StepperIcon>
//   );
// };
// const SignUp = () => {
//   const { state } = useLocation();
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     vatNumber: "",
//     termsAccepted: false,
//     email: "",
//     password: "",
//     confirmPassword: "",
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
//         !formData.name ||
//         !formData.phone ||
//         !formData.vatNumber ||
//         !formData.termsAccepted
//       ) {
//         setErrorMessage("Please complete all fields and accept terms.");
//         return;
//       }
//     } else if (activeStep === 1) {
//       // Validate password setup step
//       if (!formData.email || !formData.password || !formData.confirmPassword) {
//         setErrorMessage("Please complete all password fields.");
//         return;
//       }
//       if (formData.password !== formData.confirmPassword) {
//         setErrorMessage("Passwords do not match.");
//         return;
//       }

//       // Submit the form via API after last step
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
//     console.log("handle sign up");
//     // try {
//     //   const response = await axios.post('/api/signup', formData); // Replace with your API endpoint
//     //   console.log('Form submitted successfully:', response.data);
//     // } catch (error) {
//     //   console.error('Error submitting form:', error);
//     // }
//   };
//   //   const handleSignup = () => {
//   //     handleNext();
//   //   };
//   return (
//     <LandingPageLayout>
//       <Grid
//         container
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           px: 5,
//         }}
//       >
//         <Grid
//           item
//           xs={12}
//           sm={5}
//           md={6}
//           sx={{
//             width: { sm: "60%", md: "55%" },
//             height: { md: "82vh" },
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             display: {
//               xs: "none",
//               sm: "flex",
//             },
//           }}
//         >
//           <img
//             src={coverPage}
//             alt="cover page"
//             style={{ width: "53%", height: "100%" }}
//           />
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           sm={5}
//           md={6}
//           sx={{
//             width: { sm: "40%", xs: "85%" },
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           {/* <Box component={"form"} onSubmit={handleSignup}>
//             <Stack>
//               <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
//                 Sign up
//               </Typography>
//               <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
//                 Let’s get you all st up so you can access your personal account.{" "}
//               </Typography>
//             </Stack>
//             <TextField
//               label="Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               value="name"
//               required
//             />

//             <Button
//               variant="contained"
//               sx={{ bgcolor: "#51B56D" }}
//               type="submit"
//               fullWidth
//             >
//               Sign up
//             </Button>
//           </Box> */}
//           <Grid item xs={12} sm={5} md={6}>
//             <Stepper
//               alternativeLabel
//               activeStep={activeStep}
//               connector={<StepperConnector />}
//             >
//               {steps.map((label, index) => (
//                 <Step key={label}>
//                     {/* <StepperConnector/> */}
//                   <StepLabel StepIconComponent={StepperIconRoot}></StepLabel>
//                 </Step>
//               ))}
//             </Stepper>

//             {/* Display error message */}
//             {errorMessage && (
//               <Typography color="error">{errorMessage}</Typography>
//             )}

//             {/* Step content */}
//             {activeStep === 0 && (
//               <Stack pt={4}>
//                 <Typography sx={{ fontWeight: 600, fontSize: "25px" }}>
//                   Sign up
//                 </Typography>
//                 <Typography sx={{ fontWeight: 500, fontSize: "15px" }}>
//                   Let’s get you all st up so you can access your personal
//                   account.{" "}
//                 </Typography>
//                 <TextField
//                   label="Name"
//                   name="name"
//                   fullWidth
//                   margin="normal"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Phone"
//                   name="phone"
//                   fullWidth
//                   margin="normal"
//                   value={formData.phone}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="VAT Number"
//                   name="vatNumber"
//                   fullWidth
//                   margin="normal"
//                   value={formData.vatNumber}
//                   onChange={handleChange}
//                 />
//                 <FormControl>
//                   <FormControlLabel
//                     control={
//                       <Checkbox
//                         checked={formData.termsAccepted}
//                         onChange={handleChange}
//                         name="termsAccepted"
//                       />
//                     }
//                     label="I accept the terms and conditions"
//                   />
//                 </FormControl>
//               </Stack>
//             )}

//             {activeStep === 1 && (
//               <Box>
//                 <TextField
//                   label="Email"
//                   name="email"
//                   fullWidth
//                   margin="normal"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Password"
//                   name="password"
//                   type="password"
//                   fullWidth
//                   margin="normal"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 <TextField
//                   label="Confirm Password"
//                   name="confirmPassword"
//                   type="password"
//                   fullWidth
//                   margin="normal"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />
//               </Box>
//             )}

//             {/* Stepper navigation buttons */}
//             <Box
//               sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
//             >
//               <Button disabled={activeStep === 0} onClick={handleBack}>
//                 Back
//               </Button>
//               <Button variant="contained" onClick={handleNext}>
//                 {activeStep === steps.length - 1 ? "Submit" : "Next"}
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Grid>
//     </LandingPageLayout>
//   );
// };

// export default SignUp;
