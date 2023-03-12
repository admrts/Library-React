import { Container, Stack, Typography, Box, Button } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const loginClick = () => {
    navigate("login");
  };
  const signupClick = () => {
    navigate("signup");
  };
  return (
    <Container sx={{ height: { xs: "60vh", md: "90vh" } }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={4}
        sx={{ height: "100%" }}
      >
        <img src={Logo} alt="logo" width="50%" />
        <Typography variant="h3">Library</Typography>
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

export default Welcome;
