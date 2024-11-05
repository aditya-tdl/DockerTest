import { useEffect, useState } from "react";
import { Box, IconButton, Paper } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

const imageUrls = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
  { id: 6, content: "Item 6" },
  { id: 7, content: "Item 7" },
  { id: 8, content: "Item 8" },
  { id: 9, content: "Item 9" },
  { id: 10, content: "Item 10" },
  { id: 11, content: "Item 11" },
  { id: 12, content: "Item 12" },
];

const ImageCarousel = () => {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  }

  function showPrevImage() {
    setImageIndex(
      (prevIndex) => (prevIndex - 2 + imageUrls.length) % imageUrls.length
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        maxHeight: "630px",
        height: { xs: "230px", sm: "430px", md: "630px" },
        position: "relative",
        py: 4,
        px: 7,
      }}
    >
      <Box
        sx={{
          height: "45%",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          bgcolor: "red",
          p: 2,
          position: "relative",
        }}
      >
        {imageUrls.map((url, index) => (
          <Grid
            key={index}
            size={{ xs: 5.8, sm: 4, md: 4 }}
            component={Paper}
            elevation={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "430px",
              position: "relative",
              transform: `translateX(${-97 * imageIndex}%)`,
              transition: "transform 1s ease-in-out",
              mx: 2,
            }}
          >
            {url.content}
          </Grid>
        ))}
      </Box>

      <IconButton
        aria-label="prev"
        title="Prev"
        sx={{ position: "absolute", top: "20%", left: "1%" }}
        onClick={showPrevImage}
      >
        <KeyboardArrowLeftRounded sx={{ color: "gray", fontSize: "50px" }} />
      </IconButton>
      <IconButton
        aria-label="next"
        title="Next"
        disabled={imageIndex === imageUrls.length - 2} // Disable on last image
        sx={{
          position: "absolute",
          top: "20%",
          right: "1%",
        }}
        onClick={showNextImage}
      >
        <KeyboardArrowRightRounded sx={{ color: "gray", fontSize: "50px" }} />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
