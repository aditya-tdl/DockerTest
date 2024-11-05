import React, { useState } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DonutChart from "./DonutChart";

const items = [
  {
    id: 1,
    title: "Item 1",
    description: "Description for Item 1",
    bgColor: "blue",
    chartData: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 100 },
      { name: "Group F", value: 150 },
    ],
    lineData: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 200 },
      { name: "Apr", value: 278 },
      { name: "May", value: 189 },
    ],
  },
  {
    id: 2,
    title: "Item 2",
    description: "Description for Item 2",
    bgColor: "green",
    chartData: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 100 },
      { name: "Group F", value: 150 },
    ],
    lineData: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 200 },
      { name: "Apr", value: 278 },
      { name: "May", value: 189 },
    ],
  },
  {
    id: 3,
    title: "Item 3",
    description: "Description for Item 3",
    bgColor: "red",
    chartData: [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
      { name: "Group E", value: 100 },
      { name: "Group F", value: 150 },
    ],
    lineData: [
      { name: "Jan", value: 400 },
      { name: "Feb", value: 300 },
      { name: "Mar", value: 200 },
      { name: "Apr", value: 278 },
      { name: "May", value: 189 },
    ],
  },
];

const COLORS = ["#0088FE", "red", "#FFBB28", "#FF8042"];

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const components = [
    <DonutChart />,
    <Box sx={{ backgroundColor: "#E3F2FD", height: 200 }}>Component 2</Box>,
    <Box sx={{ backgroundColor: "#E8F5E9", height: 200 }}>Component 3</Box>,
    <Box sx={{ backgroundColor: "#FFF3E0", height: 200 }}>Component 4</Box>,
    <Box sx={{ backgroundColor: "#F3E5F5", height: 200 }}>Component 5</Box>,
    <Box sx={{ backgroundColor: "#ECEFF1", height: 200 }}>Component 6</Box>,
  ];

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm")) && !isMd;

  const itemsPerSlide = isMd ? 3 : isSm ? 2 : 1;
  const totalSlides = Math.ceil(components.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
      <Button
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        Prev
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      >
        Next
      </Button>

      <Box
        component={motion.div}
        key={currentSlide}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5 }}
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {components
            .slice(
              currentSlide * itemsPerSlide,
              (currentSlide + 1) * itemsPerSlide
            )
            .map((component, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    padding: 2,
                    backgroundColor: "#f0f0f0",
                    borderRadius: 2,
                    textAlign: "center",
                    height: "100%", // Fills the grid cell
                  }}
                >
                  {component}
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeCarousel;
