import React from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const loginClick = () => {
    navigate("login");
  };
  const signupClick = () => {
    navigate("signup");
  };
  const logoClick = () => {
    navigate("/");
  };
  return (
    <Container sx={{ py: 2, borderBottom: "1px solid lightgray" }}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ height: "50px" }}>
          <img
            src={Logo}
            alt=""
            style={{ height: "100%", cursor: "pointer" }}
            onClick={logoClick}
          />
        </Box>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Button variant="outlined" onClick={loginClick}>
            Log In
          </Button>
          <Button variant="contained" onClick={signupClick}>
            Sign Up
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Navbar;
