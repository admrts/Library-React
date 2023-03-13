import { Container, Typography, Button, Paper } from "@mui/material";
import { useEffect } from "react";
import { ListHeader } from "./";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { getData } from "../firebase";
import { useSelector } from "react-redux";

function BookList() {
  const { user } = useSelector((store) => store.auth);
  const { books } = useSelector((store) => store.books);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("bookdetail");
  };

  useEffect(() => {
    console.log(user.email);
    getData(user.email);
    console.log(books);
  }, [user.email, books]);
  return (
    <Container>
      <ListHeader />

      {books.length > 0 ? (
        books.map((book) => {
          return (
            <Paper
              key={book.id}
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
              <Typography>{book.bookName}</Typography>
              <Button onClick={handleClick}>
                <ArrowForwardIcon />
              </Button>
            </Paper>
          );
        })
      ) : (
        <Paper
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
          <Typography>Book not found. Please add book</Typography>
        </Paper>
      )}
      {/* <Paper
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
      </Paper> */}
    </Container>
  );
}

export default BookList;
