import { configureStore } from "@reduxjs/toolkit";
import usersSliceReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    usersReducer: usersSliceReducer,
  },
});
