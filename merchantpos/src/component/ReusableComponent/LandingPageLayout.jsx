import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";

const LandingPageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LandingPageLayout;
