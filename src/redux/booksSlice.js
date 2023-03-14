import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],

  bookDetail: [],
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
    bookDetailById: (state, action) => {
      state.bookDetail = state.books.filter((data) => {
        return data.id === action.payload;
      });
    },
  },
});

export const { setBooks, appendBooks, clearBooks, setBookId, bookDetailById } =
  books.actions;
export default books.reducer;
