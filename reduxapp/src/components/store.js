import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./simpleCounterApp/counterReducer";
// import counterSliceReducer from "./rtkApp/counterSlice";
import toDoSliceReducer from "./reduxToDoApp/toDoSlicer";

export const store = configureStore({
  reducer: { toDoAppReducer: toDoSliceReducer },
});
