import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    showLoader: (state) => {
      state.open = true;
    },
    hideLoader: (state) => {
      state.open = false;
    },
  },
});

export const { showLoader, hideLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
