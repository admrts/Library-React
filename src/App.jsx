import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Welcome, LoginPage, SignupPage } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
