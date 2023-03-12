import { Container, Typography, Stack } from "@mui/material";
import React from "react";
import { ListHeader } from "./";

function BookList() {
  return (
    <Container>
      <ListHeader />
      <Stack
        flexDirection="row"
        justifyContent="space-around"
        sx={{ my: 2, p: 1, boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <Typography>ASD</Typography>
        <Typography>ASD</Typography>

        <Typography>ASD</Typography>
      </Stack>
    </Container>
  );
}

export default BookList;
