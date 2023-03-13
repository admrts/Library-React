import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice";
import books from "./booksSlice";

const store = configureStore({
  reducer: {
    auth,
    books,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
