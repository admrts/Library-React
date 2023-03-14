import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import {
  Navbar,
  LoginPage,
  SignupPage,
  BookList,
  Addbook,
  BookDetail,
  Footer,
  Welcome,
  ProfilPage,
} from "./components";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((store) => store.auth);
  return (
    <div>
      <Toaster />
      <Navbar />
      <Routes>
        {user ? (
          <Route path="/" element={<BookList />} />
        ) : (
          <Route path="/" element={<Welcome />} />
        )}

        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="addbook" element={<Addbook />} />
        <Route path="bookdetail/addbook" element={<Addbook />} />
        <Route path="bookdetail" element={<BookDetail />} />
        <Route path="profilpage" element={<ProfilPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
