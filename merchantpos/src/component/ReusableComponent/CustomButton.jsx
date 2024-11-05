import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  fullWidth = true,
  loading = false,
  sx,
  ...props
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      sx={{
        borderRadius: "30px",
        padding: ".5rem 1rem",
        fontWeight: "600",
        // backgroundColor: "#6750A4",
        backgroundColor: "#fff",
        ":hover": { backgroundColor: "#fff" },
        ...sx,
      }}
      disableRipple
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
