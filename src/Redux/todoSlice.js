import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    // { id: 1, title: "todo1", completed: false },
    // { id: 2, title: "todo2", completed: false },
    // { id: 3, title: "todo3", completed: false },
    // { id: 4, title: "todo4", completed: false },
    // { id: 5, title: "todo5", completed: false },
    // { id: 6, title: "todo6", completed: false },
    // { id: 7, title: "todo7", completed: false },
  ],
  reducers: {
    addToDo(state, action) {
      const toDo = {
        id: new Date(),
        title: action.payload.title,
        completed: false,
      };
      state.push(toDo);
    },
    toggleComplete(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addToDo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice;
