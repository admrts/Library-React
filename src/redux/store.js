import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
