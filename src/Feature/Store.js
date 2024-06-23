import { configureStore } from "@reduxjs/toolkit";
import newsAppReducer from "./NewsAppSlice";

export const store = configureStore({
  reducer: {
    app: newsAppReducer,
  },
});
