import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  TextField,
  Radio,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // Import for previous icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // Import for next icon
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Carousel1 from "./ReusableComponent/Carousel1";
import slide1 from "../assets/1.png";
import { useNavigate } from "react-router-dom";

const GridContainer = styled(Grid)(({ theme }) => ({
  height: "100%", // Fill the parent height
  width: "100%", // Fill the parent width
  position: "relative", // To position children absolutely
}));
// Styling the container and slider
const SliderContainer = styled(Box)(({ theme }) => ({
  width: "98.9vw",
  height: "88vh",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  margin: 0, // Remove margin to avoid scrolling
  padding: 0,
  overflowX: "hidden",
}));

const Slider = styled(Box)(({ theme, activeIndex }) => ({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(-${activeIndex * 100}vw)`,
  width: "400vw",
  padding: 0,
  margin: 0,
}));

const Slide = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "87vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
}));

// Four sample components
const Component1 = ({ onNext, onPrev }) => {
  return (
    <Slide>
      <Carousel1 onNext={onNext} onPrev={onPrev} />
    </Slide>
  );
};
const Component2 = ({ onNext, onPrev }) => {
  return (
    <Slide>
      <GridContainer container>
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
            {/* <Box sx={{ cursor: "pointer" }} onClick={onPrev}>
              <ArrowBackIosNewIcon />
            </Box> */}
            <Box>
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: "17px", md: "42px" } }}
              >
                What type of
                <span style={{ color: "#51B56D" }}> Business do you run?</span>
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
                      onClick={onNext}
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
                      onClick={onNext}
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
              alt={"banner image"}
              style={{
                width: "100%", // Adjust based on design needs
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </GridContainer>
    </Slide>
  );
};
const Component3 = ({ onNext, onPrev }) => {
  return (
    <Slide>
      <GridContainer container>
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
            <Box sx={{ cursor: "pointer" }} onClick={onPrev}>
              <ArrowBackIosNewIcon />
            </Box>
            <Box>
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: "17px", md: "42px" } }}
              >
                What would you love to
                <span style={{ color: "#51B56D" }}> know more about?</span>
              </Typography>
            </Box>
            <Stack spacing={1}>
              <Box>
                <Button
                  variant="outlined"
                  endIcon={
                    <Radio
                      onClick={onNext}
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
                      onClick={onNext}
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
              alt={"banner2"}
              style={{
                width: "100%", // Adjust based on design needs
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </GridContainer>
    </Slide>
  );
};
const Component4 = ({ onNext, onPrev }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const submitHandler = () => {
    navigate("/signup", { state: { name, lname, phone } });
  };
  return (
    <Slide>
      <GridContainer container>
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
            <Box sx={{ cursor: "pointer" }} onClick={onPrev}>
              <ArrowBackIosNewIcon />
            </Box>
            <Box>
              <Typography
                sx={{ fontWeight: 600, fontSize: { xs: "17px", md: "42px" } }}
              >
                Let’s connect
                <span style={{ color: "#51B56D" }}>
                  {" "}
                  to Support your Business Needs!
                </span>
              </Typography>
            </Box>
            <Stack
              component={"form"}
              spacing={1.5}
              mt={1}
              onSubmit={submitHandler}
            >
              <Box>
                <TextField
                  name="name"
                  size="small"
                  required
                  placeholder="Enter your first name"
                  onChange={(e) => setName(e.target.value)}
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
                  name="lname"
                  size="small"
                  required
                  placeholder="Enter your last name"
                  onChange={(e) => setLName(e.target.value)}
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
                  required
                  onChange={(e) => setPhone(e.target.value)}
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
                  type="submit"
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
              alt={"banner4"}
              style={{
                width: "100%", // Adjust based on design needs
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </GridContainer>
    </Slide>
  );
};
const SliderApp = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle next button click
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4); // Loop back after the last slide
  };

  // Handle previous button click
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4); // Loop back to last slide if at the first slide
  };

  return (
    <SliderContainer>
      <Slider activeIndex={activeIndex}>
        <Component1 onNext={handleNext} onPrev={handlePrev} />
        <Component2 onNext={handleNext} onPrev={handlePrev} />
        <Component3 onNext={handleNext} onPrev={handlePrev} />
        <Component4 onNext={handleNext} onPrev={handlePrev} />
      </Slider>
    </SliderContainer>
  );
};

export default SliderApp;
