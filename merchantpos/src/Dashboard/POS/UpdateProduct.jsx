import React, { useState } from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleFlip } from "../../ReduxToolkit/Slices/flipSlice";

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.flip);
  const [formData, setFormData] = useState(data);

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(toggleFlip());
    // Perform any action with formData, e.g., submit to an API
    console.log("Submitted Data:", formData);
  };

  return (
    <Container sx={{ pt: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="200px"
          margin="auto"
          gap={2}
        >
          <TextField
            label="Barcode number"
            name="itemId"
            value={formData.itemId}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Product Name"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="Selling Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />
          <TextField
            label="MRP"
            name="vat"
            value={formData.vat}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
          />
          <Button type="submit" variant="contained">
            Update
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default UpdateProduct;
