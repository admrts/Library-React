import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  Welcome,
  LoginPage,
  SignupPage,
  BookList,
  Addbook,
} from "./components";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="addbook" element={<Addbook />} />
      </Routes>
    </div>
  );
}

export default App;
