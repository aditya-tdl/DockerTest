import { GlobalStyles as MUIGlobalStyles } from "@mui/material";

export default function GlobalStyles() {
  const inputGlobalStyles = (
    <MUIGlobalStyles
      styles={{
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
          WebkitTextSizeAdjust: "100%", // Add this line if needed
          textSizeAdjust: "100%",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          fontFamily: "Roboto",
          WebkitUserSelect: "none",
          userSelect: "none",
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            appearance: "textfield", // Add this line
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          display: "block",
          maxWidth: "100%",
        },
        ul: {
          margin: 0,
          padding: 0,
        },
      }}
    />
  );

  return inputGlobalStyles;
}
