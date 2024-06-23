import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};
export const modeSlice = createSlice({
  name: "mode",
  initialState,

  reducers: {
    updateMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { updateMode } = modeSlice.actions;
export default modeSlice.reducer;
