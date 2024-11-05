import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import slide1 from "../assets/1.png";

const steps = ["Select your business", "Select your Query", "Let’s connect"];
const content = [
  {
    title: "Why Aren’t You Using Data To Grow Sales Like ",
    subtitle: "Big Supermarkets?",
    image: slide1,
    button: "Boost Your Sales Now",
  },
  {
    title: "Are you thinking of ways to ",
    subtitle: "Reduce Cost & Increase Profit?",
    image: slide1,
    button: "Find Out What Data Answers",
  },
  {
    title: "Are your invoices ",
    subtitle: "ZATCA Compliant",
    image: slide1,
    button: "Ensure Your Compliance Now Almost Free",
  },
];

export default function HorizontalLinearStepper({ setActiveGrid }) {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setActiveGrid(0);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                {...labelProps}
                sx={{
                  "& .MuiStepLabel-label": {
                    color: "#FF914D",
                  },
                  "& .MuiStepIcon-root": {
                    color: "#51B56D",
                  },
                  "& .Mui-active .MuiStepIcon-root": {
                    color: "#FF914D",
                  },
                  "& .Mui-completed .MuiStepIcon-root": {
                    color: "#4CAF50",
                  },
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          {activeStep === 0 && (
            <Grid container id="second-grid">
              <Grid
                size={{ xs: 6.5, md: 6.5, sm: 6.5 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "start", md: "center" },
                  backgroundColor: "#fff",
                  color: "#000",
                  height: { md: "500px", xs: "200px" },
                  mt: { xs: 0, md: 3 },
                }}
              >
                <Stack sx={{ display: "flex", px: { xs: 2, md: 15 } }}>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "17px", md: "42px" },
                      }}
                    >
                      What type of
                      <span style={{ color: "#51B56D" }}>
                        {" "}
                        Business do you run?
                      </span>
                    </Typography>
                  </Box>
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "start", md: "center" },
                      mt: { xs: 2, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        endIcon={
                          <Radio
                            onClick={handleNext}
                            sx={{
                              color: "#FF914D",
                              "&.Mui-checked": {
                                color: "#FF914D",
                              },
                              "&.MuiCheckbox-root": {
                                borderRadius: "50%",
                                width: { md: "24px", xs: "24px" },
                                height: { md: "24px", xs: "24px" },
                                padding: "0",
                              },
                            }}
                          />
                        }
                        size="small"
                        sx={{
                          // Customize button size
                          width: { md: "260px", xs: "130px" }, // adjust the width
                          height: { md: "40px", xs: "30px" }, // adjust the height
                          fontSize: { md: "16px", xs: "10px" }, // adjust the font size
                          color: "#FF914D",
                          fontWeight: 600,
                          borderColor: "#FF914D",
                          textTransform: "none",
                          "&:hover": {
                            borderColor: "#FF914D",
                            backgroundColor: "rgba(255, 145, 77, 0.1)",
                          },
                        }}
                      >
                        Supermarket
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        endIcon={
                          <Radio
                            onClick={handleNext}
                            sx={{
                              color: "#FF914D",
                              "&.Mui-checked": {
                                color: "#FF914D",
                              },
                              "&.MuiCheckbox-root": {
                                borderRadius: "50%",
                                width: { md: "24px", xs: "24px" },
                                height: { md: "24px", xs: "24px" },
                                padding: "0",
                              },
                            }}
                          />
                        }
                        size="small"
                        sx={{
                          width: { md: "260px", xs: "160px" }, // adjust the width
                          height: { md: "40px", xs: "30px" }, // adjust the height
                          fontSize: { md: "16px", xs: "10px" }, // adjust the font size
                          color: "#FF914D",
                          fontWeight: 600,
                          borderColor: "#FF914D",
                          textTransform: "none",
                          ml: { xs: 0, md: 3 },
                          "&:hover": {
                            borderColor: "#FF914D",
                            backgroundColor: "rgba(255, 145, 77, 0.1)",
                          },
                        }}
                      >
                        Something Else
                      </Button>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                size={{ xs: 5, md: 5 }}
                sx={{
                  backgroundColor: "#fff",
                  display: { md: "flex", sm: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  px: 5,
                }}
              >
                <Box>
                  <img
                    src={slide1}
                    alt="coverpage"
                    style={{
                      width: "100%", // Adjust based on design needs
                      height: "100%",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {activeStep === 0 && (
            <Grid container id="second-grid">
              <Grid
                size={{ xs: 6.5, md: 6.5, sm: 6.5 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "start", md: "center" },
                  backgroundColor: "#fff",
                  color: "#000",
                  height: { md: "500px", xs: "200px" },
                  mt: { xs: 0, md: 3 },
                }}
              >
                <Stack sx={{ display: "flex", px: { xs: 2, md: 15 } }}>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "17px", md: "42px" },
                      }}
                    >
                      What type of
                      <span style={{ color: "#51B56D" }}>
                        {" "}
                        Business do you run?
                      </span>
                    </Typography>
                  </Box>
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "start", md: "center" },
                      mt: { xs: 2, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        endIcon={
                          <Radio
                            onClick={handleNext}
                            sx={{
                              color: "#FF914D",
                              "&.Mui-checked": {
                                color: "#FF914D",
                              },
                              "&.MuiCheckbox-root": {
                                borderRadius: "50%",
                                width: { md: "24px", xs: "24px" },
                                height: { md: "24px", xs: "24px" },
                                padding: "0",
                              },
                            }}
                          />
                        }
                        size="small"
                        sx={{
                          // Customize button size
                          width: { md: "260px", xs: "130px" }, // adjust the width
                          height: { md: "40px", xs: "30px" }, // adjust the height
                          fontSize: { md: "16px", xs: "10px" }, // adjust the font size
                          color: "#FF914D",
                          fontWeight: 600,
                          borderColor: "#FF914D",
                          textTransform: "none",
                          "&:hover": {
                            borderColor: "#FF914D",
                            backgroundColor: "rgba(255, 145, 77, 0.1)",
                          },
                        }}
                      >
                        Supermarket
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        endIcon={
                          <Radio
                            onClick={handleNext}
                            sx={{
                              color: "#FF914D",
                              "&.Mui-checked": {
                                color: "#FF914D",
                              },
                              "&.MuiCheckbox-root": {
                                borderRadius: "50%",
                                width: { md: "24px", xs: "24px" },
                                height: { md: "24px", xs: "24px" },
                                padding: "0",
                              },
                            }}
                          />
                        }
                        size="small"
                        sx={{
                          width: { md: "260px", xs: "160px" }, // adjust the width
                          height: { md: "40px", xs: "30px" }, // adjust the height
                          fontSize: { md: "16px", xs: "10px" }, // adjust the font size
                          color: "#FF914D",
                          fontWeight: 600,
                          borderColor: "#FF914D",
                          textTransform: "none",
                          ml: { xs: 0, md: 3 },
                          "&:hover": {
                            borderColor: "#FF914D",
                            backgroundColor: "rgba(255, 145, 77, 0.1)",
                          },
                        }}
                      >
                        Something Else
                      </Button>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                size={{ xs: 5, md: 5 }}
                sx={{
                  backgroundColor: "#fff",
                  display: { md: "flex", sm: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  px: 5,
                }}
              >
                <Box>
                  <img
                    src={slide1}
                    alt="coverpage"
                    style={{
                      width: "100%", // Adjust based on design needs
                      height: "100%",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
          {activeStep === 1 && (
            <Grid container id="third-grid">
              <Grid
                size={{ xs: 12, md: 6.5, sm: 6.5 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: { xs: "start", md: "center" },
                  backgroundColor: "#fff",
                  color: "#000",
                  height: { md: "500px", xs: "200px" },
                  mt: { xs: 0, md: 3 },
                }}
              >
                <Stack sx={{ display: "flex", px: { xs: 2, md: 15 } }}>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "17px", md: "42px" },
                      }}
                    >
                      What would you love to
                      <span style={{ color: "#51B56D" }}>
                        {" "}
                        know more about?
                      </span>
                    </Typography>
                  </Box>
                  <Stack spacing={1}>
                    <Box>
                      <Button
                        variant="outlined"
                        endIcon={
                          <Radio
                            onClick={handleNext}
                            sx={{
                              color: "#FF914D",
                              "&.Mui-checked": {
                                color: "#FF914D",
                              },
                              "&.MuiCheckbox-root": {
                                borderRadius: "50%",
                                width: { md: "24px", xs: "0px" },
                                height: { md: "24px", xs: "0px" },
                                padding: "0",
                              },
                            }}
                          />
                        }
                        size="small"
                        sx={{
                          // Customize button size
                          width: { md: "260px", xs: "180px" }, // adjust the width
                          height: { md: "40px", xs: "30px" }, // adjust the height
                          fontSize: { md: "16px", xs: "10px" }, // adjust the font size
                          color: "#FF914D",
                          fontWeight: 600,
                          borderColor: "#FF914D",
                          textTransform: "none",
                          "&:hover": {
                            borderColor: "#FF914D",
                            backgroundColor: "rgba(255, 145, 77, 0.1)",
                          },
                        }}
                      >
                        Boost Your Sales Now
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="outlined"
                        endIcon={
                          <Radio
                            onClick={handleNext}
                            sx={{
                              color: "#FF914D",
                              "&.Mui-checked": {
                                color: "#FF914D",
                              },
                              "&.MuiCheckbox-root": {
                                borderRadius: "50%",
                                width: { md: "24px", xs: "10px" },
                                height: { md: "24px", xs: "10px" },
                                padding: "0",
                              },
                            }}
                          />
                        }
                        size="small"
                        sx={{
                          width: { md: "400px", xs: "280px" }, // adjust the width
                          height: { md: "40px", xs: "30px" }, // adjust the height
                          fontSize: { md: "16px", xs: "10px" }, // adjust the font size
                          color: "#FF914D",
                          fontWeight: 600,
                          borderColor: "#FF914D",
                          textTransform: "none",
                          "&:hover": {
                            borderColor: "#FF914D",
                            backgroundColor: "rgba(255, 145, 77, 0.1)",
                          },
                        }}
                      >
                        Making Your Invoices ZATCA Compliant
                      </Button>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                size={{ xs: 5, md: 5 }}
                sx={{
                  backgroundColor: "#fff",
                  display: { md: "flex", sm: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  px: 5,
                }}
              >
                <Box>
                  <img
                    src={slide1}
                    alt="coverpage"
                    style={{
                      width: "100%", // Adjust based on design needs
                      height: "100%",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
          {activeStep === 2 && (
            <Grid container id="fourth-grid">
              <Grid
                size={{ xs: 12, md: 6.5, sm: 6.5 }}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  color: "#000",
                  height: { md: "500px", xs: "250px" },
                  mt: { xs: 0, md: 3 }, // Adjust height
                }}
              >
                <Stack sx={{ display: "flex", px: { xs: 2, md: 15 } }}>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "17px", md: "42px" },
                      }}
                    >
                      Let’s connect
                      <span style={{ color: "#51B56D" }}>
                        {" "}
                        to Support your Business Needs!
                      </span>
                    </Typography>
                  </Box>
                  <Stack spacing={1.5} mt={1}>
                    <Box>
                      <TextField
                        name="name"
                        size="small"
                        placeholder="Enter your name"
                        InputProps={{
                          sx: {
                            color: "black", // Input text color
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FF914D", // Default border color
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FF914D", // Border color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FF914D", // Border color when focused
                            },
                          },
                        }}
                        variant="outlined" // Use outlined variant to see borders
                      />
                    </Box>
                    <Box>
                      <TextField
                        size="small"
                        name="phone"
                        placeholder="Enter your mobile number"
                        InputProps={{
                          sx: {
                            color: "black", // Input text color
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FF914D", // Default border color
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FF914D", // Border color on hover
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#FF914D", // Border color when focused
                            },
                          },
                        }}
                        variant="outlined" // Use outlined variant to see borders
                      />
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          fontWeight: 600,
                          color: "white",
                          backgroundColor: "#FF914D",
                          borderColor: "#FF914D",
                          textTransform: "none",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#FF914D",
                          },
                        }}
                        onClick={handleReset}
                      >
                        Lets connect
                      </Button>
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                size={{ xs: 5, md: 5 }}
                sx={{
                  backgroundColor: "#fff",
                  display: { md: "flex", sm: "flex", xs: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  px: 5,
                }}
              >
                <Box>
                  <img
                    src={slide1}
                    alt="coverpage"
                    style={{
                      width: "100%", // Adjust based on design needs
                      height: "100%",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
          {/* <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button
              onClick={
                activeStep === steps.length - 1 ? handleReset : handleNext
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box> */}
        </React.Fragment>
      )}
    </Box>
  );
}
