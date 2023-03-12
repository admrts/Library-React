import React from "react";
import { Typography, TextField, Box, Button, Container } from "@mui/material";
import "./form.css";

function Form({ header }) {
  return (
    <Container>
      <form className="form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "70%",
          }}
        >
          <Typography variant="h4">{header}</Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            size="small"
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            autoComplete="false"
          />
          <Box>
            <Button variant="contained">{header}</Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default Form;
