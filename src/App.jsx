import React from "react";
import { Navbar, Welcome, LoginPage, SignupPage } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Welcome />  */}
      <LoginPage />
      <SignupPage />
    </div>
  );
}

export default App;
