import React, { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { AnimatePresence, motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slide1 from "../assets/1.png"; // Replace with actual images
import "./style.css";
import HorizontalLinearStepper from "./HorizontalLinearStepper";

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

// Animation Variants
const variants = {
  slideOutLeft: { x: "-100%", opacity: 0, transition: { duration: 0.3 } },
  slideInRight: { x: 0, opacity: 1, transition: { duration: 0.3 } },
};

const Carousel = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box py={3}>
      <AnimatePresence mode="wait">
        {activeGrid === 0 && (
          <motion.div
            key="carousel"
            initial="slideInRight"
            exit="slideOutLeft"
            animate="slideInRight"
            variants={variants}
          >
            <Grid
              container
              sx={{
                position: "relative",
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
                      sx={{
                        fontWeight: 600,
                        fontSize: { xs: "15px", md: "42px" },
                      }}
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
                    onClick={() => setActiveGrid(1)}
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
                      width: "100%",
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
          </motion.div>
        )}
        {activeGrid === 1 && (
          <motion.div
            key="stepper"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HorizontalLinearStepper setActiveGrid={setActiveGrid} />
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default Carousel;
