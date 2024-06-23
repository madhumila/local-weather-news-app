import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
  newsLanguage: null,
};
export const newsAppSlice = createSlice({
  name: "app",
  initialState,

  reducers: {
    updateMode: (state, action) => {
      state.isDarkMode = action.payload;
    },
    updateNewsLanguage: (state, action) => {
      state.newsLanguage = action.payload;
    },
  },
});

export const { updateMode, updateNewsLanguage } = newsAppSlice.actions;
export default newsAppSlice.reducer;
