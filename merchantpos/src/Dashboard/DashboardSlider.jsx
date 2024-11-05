import React, { useState } from "react";
import { IconButton, Paper, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const items = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
  { id: 6, content: "Item 6" },
];

const DashboardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        py: 4,
        px: 7,
      }}
    >
      {/* Grid container */}
      <Grid
        container
        spacing={2}
        sx={{
          transform: `translateX(${-currentIndex * 100}%)`,
          transition: "transform 0.5s ease",
          display: "flex",
          flexDirection:"row",
          bgcolor: "red",
        }}
      >
        {/* Map through items and create Grid items */}
        {items.map((item) => (
          <Grid
            size={{ xs: 6, sm: 6, md: 4 }}
            key={item.id}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Paper elevation={3} sx={{ height: 200, textAlign: "center" }}>
              <Box sx={{ p: 2 }}>{item.content}</Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Left Button */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "white",
          "&:hover": { bgcolor: "gray" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Right Button */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
          bgcolor: "white",
          "&:hover": { bgcolor: "gray" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default DashboardSlider;
