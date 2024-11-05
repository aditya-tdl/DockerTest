import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar, Alert } from "@mui/material";
import { hideSnackbar } from "../Slices/snackbarSlice";

export const SnackbarProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { open, severity, message } = useSelector((state) => state.snackbar);
  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <>
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert variant="filled" severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
