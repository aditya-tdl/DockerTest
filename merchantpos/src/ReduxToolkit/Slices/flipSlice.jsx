import { createSlice } from "@reduxjs/toolkit";

const flipSlice = createSlice({
  name: "flip",
  initialState: {
    isFlipped: false, // Initial flip state
    data: {},
  },
  reducers: {
    setFlip: (state, action) => {
      state.isFlipped = action.payload.isFlipped; // Set flip state
      if (action.payload.isFlipped && action.payload.data) {
        state.data = action.payload.data; // Set data if provided when flipped is true
      } else if (!action.payload.isFlipped) {
        state.data = {}; // Clear data when flip is false, if needed
      }
    },
    toggleFlip: (state, action) => {
      state.isFlipped = !state.isFlipped; // Toggle flip state
      if (state.isFlipped && action.payload?.data) {
        state.data = action.payload.data; // Set data when flipping to true, if provided
      } else if (!state.isFlipped) {
        state.data = {}; // Optionally clear data on un-flip
      }
    },
    setData: (state, action) => {
      state.data = action.payload; // Update data independently
    },
  },
});

export const { setFlip, toggleFlip, setData } = flipSlice.actions;
export default flipSlice.reducer;
