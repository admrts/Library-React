import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function footer() {
  return (
    <Stack
      bgcolor="white"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      sx={{
        height: "6vh",
        position: "fixed",
        bottom: "0",
        width: "100%",
        boxShadow: "0 0 10px gray",
      }}
    >
      <Typography>
        {" "}
        Created by{" "}
        <a href="https://github.com/admrts" style={{ color: "black" }}>
          Ali
        </a>
      </Typography>
    </Stack>
  );
}

export default footer;
