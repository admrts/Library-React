import React from "react";
import { Box, Container, Stack, Button, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
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

  const profilClick = () => {
    navigate("profilpage");
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
        {user ? (
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Typography sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              Hello!
              <Box
                component="span"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover": {
                    opacity: [0.6],
                  },
                }}
                onClick={profilClick}
              >
                <PersonIcon /> {user.displayName ?? user.email}
              </Box>
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Button variant="outlined" onClick={loginClick}>
              Log In
            </Button>
            <Button variant="contained" onClick={signupClick}>
              Sign Up
            </Button>
          </Box>
        )}
      </Stack>
    </Container>
  );
}

export default Navbar;
