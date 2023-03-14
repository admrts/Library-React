import { Container, Typography, Stack, Button } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { useDispatch } from "react-redux";
import { logout as logoutHandle } from "../redux/authSlice";

function ProfilPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const logoutClick = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/");
  };
  return (
    <Container>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
        mt={1}
      >
        <Stack flexDirection="row" alignItems="center" gap={2}>
          <ArrowCircleLeftIcon
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          />
          <Typography
            variant="h6"
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          >
            Book List
          </Typography>
        </Stack>
        <Button variant="contained" color="error" onClick={logoutClick}>
          Log Out
        </Button>
      </Stack>
    </Container>
  );
}

export default ProfilPage;
