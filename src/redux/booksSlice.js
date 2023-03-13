import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
};

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    clearBooks: (state) => {
      state.books = [];
    },
    appendBooks: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { setBooks, appendBooks, clearBooks } = books.actions;
export default books.reducer;
