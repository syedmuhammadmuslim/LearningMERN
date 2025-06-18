import { createSlice } from "@reduxjs/toolkit";

// todos{id:1,text:"task"}

const toDoSlice = createSlice({
  name: "todoslice",
  initialState: { todos: [] },
  reducers: {
    addToDo(state, action) {
      state.todos.push({ id: Date.now(), text: action.payload });
    },
    deleteToDo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
