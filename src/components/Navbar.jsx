import React from "react";
import { Box, Container, Stack, Button } from "@mui/material";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <Container sx={{ py: 2, borderBottom: "1px solid lightgray" }}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box sx={{ height: "50px" }}>
          <img src={Logo} alt="" style={{ height: "100%" }} />
        </Box>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Button variant="outlined">Log In</Button>
          <Button variant="contained">Sign Up</Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default Navbar;
