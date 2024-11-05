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

const DonutChart = () => {
  return (
    <>
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            minWidth: "100%",
            height: "300px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: item.bgColor,
            color: "white",
            textAlign: "center",
            mx: 1,
          }}
        >
          <Box
            component={Paper}
            elevation={3}
            sx={{
              width: "450px",
              height: "190px",
              position: "relative",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "370px",
                height: "170px",
                bgcolor: "#979797",
                position: "absolute",
                top: -40,
                left: 40,
                zIndex: "100",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              {/* Donut Chart */}
              <PieChart width={120} height={120}>
                <Pie
                  data={item.chartData}
                  innerRadius={30} // Inner radius for donut shape
                  outerRadius={40}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {item.chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </Box>
            <Typography
              sx={{
                color: "#344767",
                fontWeight: 600,
                zIndex: 1000,
                py: 2,
                px: 5,
              }}
            >
              Website Views
            </Typography>
          </Box>
          <Box
            component={Paper}
            elevation={3}
            sx={{
              width: "450px",
              height: "190px",
              position: "relative",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "370px",
                height: "170px",
                bgcolor: "#979797",

                position: "absolute",
                top: -40,
                left: 40,
                zIndex: "100",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              <ResponsiveContainer width="100%" height="90%">
                <BarChart
                  data={item.chartData}
                  margin={{
                    top: 18,
                    right: 30,
                    left: 8,
                    bottom: 3,
                  }}
                >
                  <CartesianGrid strokeDasharray="2 2" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#FFFFFF" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
            <Typography
              sx={{
                color: "#344767",
                fontWeight: 600,
                zIndex: 1000,
                py: 2,
                px: 5,
              }}
            >
              Daily Sales
            </Typography>
          </Box>
          <Box
            component={Paper}
            elevation={3}
            sx={{
              width: "450px",
              height: "190px",
              position: "relative",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
              alignItems: "start",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "370px",
                height: "170px",
                bgcolor: "#979797",
                position: "absolute",
                top: -40,
                left: 40,
                zIndex: "100",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              {/* Line Chart */}
              <ResponsiveContainer width="100%" height="90%">
                <LineChart
                  data={item.lineData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 5,
                    bottom: 2,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
            <Typography
              sx={{
                color: "#344767",
                fontWeight: 600,
                zIndex: 1000,
                py: 2,
                px: 5,
              }}
            >
              Completed Tasks
            </Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default DonutChart;
