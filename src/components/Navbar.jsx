import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { updateProfilPage } from "../redux/booksSlice";
import { CustomButton } from "./";

function Navbar() {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
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
    dispatch(updateProfilPage());
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
            <CustomButton
              variant={"outlined"}
              onClick={loginClick}
              color={"primary"}
              buttonName={"Log In"}
            />
            <CustomButton
              variant={"contained"}
              onClick={signupClick}
              color={"primary"}
              buttonName={"Sign Up"}
            />
          </Box>
        )}
      </Stack>
    </Container>
  );
}

export default Navbar;
