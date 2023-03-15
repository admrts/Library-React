import { Container } from "@mui/material";
import { useEffect } from "react";
import { ListHeader, BookListItem } from "./";

import { useNavigate } from "react-router-dom";
import { getData } from "../firebase";
import { useSelector } from "react-redux";
import { bookDetailById, sorted } from "../redux/booksSlice";
import { useDispatch } from "react-redux";

function BookList() {
  const { user } = useSelector((store) => store.auth);
  const { sortedBooks, books } = useSelector((store) => store.books);
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
    dispatch(sorted());
  }, [user.email, dispatch, books]);

  return (
    <Container sx={{ pb: 7 }}>
      <ListHeader />

      {sortedBooks.length > 0 ? (
        sortedBooks.map((book) => {
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
