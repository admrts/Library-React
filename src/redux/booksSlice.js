import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  bookId: "",
};

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearBooks: (state) => {
      state.books = [];
    },
    appendBooks: (state, action) => {
      state.books.push(action.payload);
    },
    setBookId: (state, action) => {
      state.bookId = action.payload;
    },
  },
});

export const { setBooks, appendBooks, clearBooks, setBookId } = books.actions;
export default books.reducer;
