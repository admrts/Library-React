import { Container } from "@mui/material";
import { useEffect } from "react";
import { ListHeader, BookListItem } from "./";

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
    <Container sx={{ pb: 7 }}>
      <ListHeader />

      {books.length > 0 ? (
        books.map((book) => {
          return (
            <BookListItem
              key={book.id}
              bookId={book.id}
              onClick={handleClick}
              bookName={book.bookName}
            />
          );
        })
      ) : (
        <BookListItem bookName={"Book not found. Please add book"} />
      )}
    </Container>
  );
}

export default BookList;
