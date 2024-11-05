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
import { Icon } from "@iconify/react";
import slide1 from "../assets/1.png"; // Replace with actual images
import "./style.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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

const HorizontalCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // To prevent multiple transitions
  const [activeGrid, setActiveGrid] = useState(0);
  const leftSlideChangeHandler = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveImage((prev) => (prev === 0 ? content.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500); // Delay matches CSS animation duration
    }
  };

  const rightSlideChangeHandler = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveImage((prev) => (prev === content.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === content.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const scrollToSecondGrid = () => {
    setActiveGrid(activeImage);
  };
  const scrollToThirdGrid = () => {
    const thirdGrid = document.getElementById("third-grid");
    if (thirdGrid) {
      thirdGrid.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToFourthGrid = () => {
    const thirdGrid = document.getElementById("fourth-grid");
    if (thirdGrid) {
      thirdGrid.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScroll = (gridIndex) => {
    setActiveGrid(gridIndex);
  };
  return (
    <Box
      sx={{
        display: "flex",
        // overflow: "hidden",
        width: "100vw",
        height: "100vh",
        transition: "transform 0.8s ease-in-out",
        transform: `translateX(-${activeGrid * 100}vw)`, // Translate based on active grid
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        {/* 1st grid */}
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            color: "#000",
            height: { md: "600px", xs: "250px" },
          }}
        >
          {/* Left Section: Text */}
          <Grid
            size={{ xs: 6.5, md: 6.5 }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              color: "#000",
              height: { md: "600px", xs: "250px" },
            }}
          >
            <Stack sx={{ display: "flex", px: { xs: 5, md: 15 } }}>
              <Box className="fade-in-out" key={activeImage}>
                <Typography
                  gutterBottom
                  sx={{ fontWeight: 600, fontSize: { xs: "15px", md: "42px" } }}
                >
                  {content[activeImage].title}
                  <span style={{ color: "#51B56D" }}>
                    {content[activeImage].subtitle}
                  </span>
                </Typography>
              </Box>
            </Stack>
            <Box
              sx={{
                position: "absolute",
                left: { xs: 36, md: 120 },
                top: { xs: "80%", sm: "60%", md: "78%" },
                transform: "translateY(-50%)",
                zIndex: 100,
              }}
            >
              <Button
                variant="outlined"
                onClick={scrollToSecondGrid}
                endIcon={
                  <ArrowForwardIosIcon
                    sx={{
                      color: "#FF914D",
                      fontSize: { md: "15px", xs: "0px" },
                    }}
                  />
                }
                size="small"
                sx={{
                  color: "#FF914D",
                  fontWeight: 600,
                  borderColor: "#FF914D",
                  textTransform: "none",
                  fontSize: { xs: "9px", md: "15px" },
                  "&:hover": {
                    borderColor: "#FF914D",
                    backgroundColor: "rgba(255, 145, 77, 0.1)",
                  },
                }}
              >
                {content[activeImage].button}
              </Button>
            </Box>

            {/* Left Arrow */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 5, md: 30 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 100,
              }}
              onClick={leftSlideChangeHandler}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: "#00000080",
                  fontSize: { md: "32px", xs: "20px" },
                  rotate: "180deg",
                }}
              />
              {/* <Icon
              icon="fa6-solid:less-than"
              style={{ color: "#00000080", fontSize: "20px" }}
            /> */}
            </Box>
          </Grid>

          {/* Right Section: Image */}
          <Grid
            size={{ xs: 5, md: 5 }}
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pl: { md: 10, xs: 0 },
            }}
          >
            <Box key={activeImage}>
              <img
                src={content[activeImage].image}
                alt={content[activeImage].title}
                style={{
                  objectFit: "contain",
                  width: "100%", // Adjust based on design needs
                  height: "100%",
                }}
              />
            </Box>

            {/* Right Arrow */}
            <Box
              sx={{
                position: "absolute",
                right: { xs: 5, md: 30 },
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 100,
              }}
              onClick={rightSlideChangeHandler}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: "#00000080",
                  fontSize: { md: "32px", xs: "20px" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        {/* 2nd grid */}
        <Grid container id={activeGrid}>
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
                  sx={{ fontWeight: 600, fontSize: { xs: "17px", md: "42px" } }}
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
                        onClick={scrollToThirdGrid}
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
                        onClick={scrollToThirdGrid}
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
            <Box key={activeImage}>
              <img
                src={content[activeImage].image}
                alt={content[activeImage].title}
                style={{
                  width: "100%", // Adjust based on design needs
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        {/* 3rd grid */}
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
                        onClick={scrollToFourthGrid}
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
                        onClick={scrollToFourthGrid}
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
            <Box key={activeImage}>
              <img
                src={content[activeImage].image}
                alt={content[activeImage].title}
                style={{
                  width: "100%", // Adjust based on design needs
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        {/* 4rth grid */}
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
                  sx={{ fontWeight: 600, fontSize: { xs: "17px", md: "42px" } }}
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
            <Box key={activeImage}>
              <img
                src={content[activeImage].image}
                alt={content[activeImage].title}
                style={{
                  width: "100%", // Adjust based on design needs
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default HorizontalCarousel;
