import { Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetail() {
  const { books, bookId } = useSelector((store) => store.books);
  const [book, setBook] = useState();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    console.log(book);
  };

  useEffect(() => {
    const currentBook = books.filter((data) => {
      return data.id === bookId;
    });
    setBook(currentBook);
  }, [bookId, books]);
  return (
    <Container>
      <Stack flexDirection="row" alignItems="center" gap={1} mt={1}>
        <ArrowCircleLeftIcon onClick={handleClick} sx={{ cursor: "pointer" }} />
        <Typography
          variant="h6"
          onClick={handleClick}
          sx={{ cursor: "pointer" }}
        >
          Book List
        </Typography>
      </Stack>
      <Stack flexDirection="row" justifyContent="center" mt={3}>
        <Stack alignItems="center">
          <Stack gap={2}>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Name:
              </Typography>
              <Typography variant="h4">
                {book ? book[0].bookName : ""}
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Author:
              </Typography>
              <Typography variant="h4">{book ? book[0].author : ""}</Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Pages:
              </Typography>
              <Typography variant="h4">{book ? book[0].pages : ""}</Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                About:
              </Typography>
              <Typography variant="h4">{book ? book[0].about : ""}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default BookDetail;
