import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  sortedBooks: [],
  updateBook: false,
  bookDetail: [],
  totalBooks: 0,
  totalPages: 0,
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
    sorted: (state) => {
      state.sortedBooks = state.books.sort((a, b) =>
        a.bookName > b.bookName ? 1 : a.bookName < b.bookName ? -1 : 0
      );
    },
    setBookId: (state, action) => {
      state.bookId = action.payload;
    },
    bookDetailById: (state, action) => {
      state.bookDetail = state.books.filter((data) => {
        return data.id === action.payload;
      });
    },
    updateControl: (state, action) => {
      if (action.payload === "update") {
        state.updateBook = true;
      } else if (action.payload === "addbook") {
        state.updateBook = false;
      }
    },
    updateProfilPage: (state, action) => {
      state.totalPages = 0;
      state.totalBooks = state.books.length;
      state.books.forEach((book) => {
        state.totalPages += Number(book.pages);
      });
    },
  },
});

export const {
  setBooks,
  appendBooks,
  clearBooks,
  setBookId,
  bookDetailById,
  updateControl,
  updateProfilPage,
  sorted,
} = books.actions;
export default books.reducer;
