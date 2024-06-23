import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./ModeSlice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
  },
});
