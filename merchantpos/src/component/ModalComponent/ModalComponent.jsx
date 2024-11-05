import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Backdrop, Paper } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  maxWidth: { xs: 350, sm: 500, md: 1100 },
  height: "auto",
  maxHeight: { xs: "93vh" },
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  boxShadow: "3px 4px 16px -2px black",
};

const ModalComponent = ({ open, handleClose, children }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Backdrop
          open={open}
          sx={{
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.5)",
            // backgroundColor: "red",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          // onClick={handleClose}
        >
          <Box
            sx={{
              ...style,
            }}
            component={Paper}
            elevation={4}
          >
            {children}
          </Box>
        </Backdrop>
      </Modal>
    </>
  );
};

export default ModalComponent;
