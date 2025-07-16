import { configureStore } from "@reduxjs/toolkit";
import profileSliceReducer from "./profileSlice";
import usersSliceReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    profileReducer: profileSliceReducer,
    usersReducer: usersSliceReducer,
  },
});
