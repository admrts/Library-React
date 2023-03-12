import { Container, Stack, Typography, Box, Button } from "@mui/material";
import React from "react";
import Logo from "../assets/logo.png";

function Welcome() {
  return (
    <Container sx={{ height: "70vh" }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={4}
        sx={{ height: "100%" }}
      >
        <img src={Logo} alt="logo" width="50%" />
        <Typography variant="h3">Library</Typography>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Button variant="outlined">Log In</Button>
          <Button variant="contained">Sign Up</Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Welcome;
