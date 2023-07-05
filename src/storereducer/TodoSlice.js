import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setCheck: (state, action) => {
      state.todoList.map((item) => {
        if (action.payload === item.id) {
          item.done ? (item.done = false) : (item.done = true);
        }
      });
    },

    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => action.payload.id !== item.id
      );
    },

    filterDone: (state, action) => {
      state.todoList = state.todoList.filter((item) => !item.done);
    },

    search: (state, action) => {
      state.todoList = state.todoList.filter((item) =>
        item.item.includes(action.payload)
      );
    },

    sortTodoList: (state) => {
      state.todoList.sort((a, b) => {
        if (a.item < b.item) {
          return -1;
        }
        if (a.item > b.item) {
          return 1;
        }
        return 0;
      });
    },

    editTodo: (state, action) => {
      const { id } = action.payload;
      const newItem = prompt("Enter new item");
      if (newItem) {
        state.todoList = state.todoList.map((todo) =>
          todo.id === id ? { ...todo, item: newItem } : todo
        );
      }
    },
  
  

  },
});

export const { saveTodo, setCheck, deleteTodo, filterDone, search, sortTodoList,editTodo } =
  TodoSlice.actions;
export const selectTodoList = (state) => state.todos.todoList;
export default TodoSlice.reducer;