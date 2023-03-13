import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.todos = action.payload;
    },
    appendBooks: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

export const { setBooks, appendBooks } = books.actions;
export default books.reducer;
