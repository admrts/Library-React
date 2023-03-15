import React from "react";
import { Paper, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function BookListItem({ bookId, onClick, bookName }) {
  return (
    <Paper
      id={bookId}
      onClick={onClick}
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
      <Typography id={bookId} onClick={onClick}>
        {bookName}
      </Typography>
      <Button disabled>
        <ArrowForwardIcon />
      </Button>
    </Paper>
  );
}

export default BookListItem;
