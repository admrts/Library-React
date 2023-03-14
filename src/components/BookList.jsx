import { Container, Typography, Button, Paper } from "@mui/material";
import { useEffect } from "react";
import { ListHeader } from "./";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { getData } from "../firebase";
import { useSelector } from "react-redux";
import { bookDetailById } from "../redux/booksSlice";
import { useDispatch } from "react-redux";

function BookList() {
  const { user } = useSelector((store) => store.auth);
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (e.target.id) {
      navigate("bookdetail");
      dispatch(bookDetailById(e.target.id));
    }
  };

  useEffect(() => {
    getData(user.email);
  }, [user.email]);

  return (
    <Container>
      <ListHeader />

      {books.length > 0 ? (
        books.map((book) => {
          return (
            <Paper
              key={book.id}
              id={book.id}
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
              <Typography id={book.id} onClick={handleClick}>
                {book.bookName}
              </Typography>
              <Button disabled>
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
    </Container>
  );
}

export default BookList;
