import { Container, Typography, Button, Paper } from "@mui/material";
import React from "react";
import { ListHeader } from "./";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

function BookList() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("bookdetail");
  };
  return (
    <Container>
      <ListHeader />
      <Paper
        onClick={handleClick}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          my: 2,
          p: 1,
          cursor: "pointer",
          borderRadius: "10px",
          ":hover": {
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          },
        }}
      >
        <Typography>Book Name</Typography>
        <Button onClick={handleClick}>
          <ArrowForwardIcon />
        </Button>
      </Paper>
    </Container>
  );
}

export default BookList;
