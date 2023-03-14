import { useState, useEffect } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Container,
  Stack,
} from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import { addBook } from "../../firebase";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function Form() {
  const { updateBook, bookDetail } = useSelector((store) => store.books);

  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [about, setAbout] = useState("");
  const [id, setId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(nanoid());
    if (updateBook) {
      setBookName(bookDetail[0].bookName);
      setAuthor(bookDetail[0].author);
      setPages(bookDetail[0].pages);
      setAbout(bookDetail[0].about);
      setId(bookDetail[0].id);
    }
  }, [updateBook, bookDetail, id]);

  const addClick = async () => {
    const asd = await addBook(
      {
        bookName,
        author,
        pages,
        about,
        id,
      },
      id
    );
    if (asd) {
      setBookName("");
      setAuthor("");
      setPages("");
      setAbout("");
      setId("");
    }
  };
  const handleClick = () => {
    navigate("/");
  };
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

      <form className="form">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "70%",
          }}
        >
          <Typography variant="h4">Add Book</Typography>
          <TextField
            label="Book Name"
            variant="outlined"
            size="small"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <TextField
            label="Author"
            variant="outlined"
            size="small"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <TextField
            label="Pages"
            variant="outlined"
            size="small"
            type="number"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />
          <TextField
            label="About"
            variant="outlined"
            size="small"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <Box>
            <Button variant="contained" onClick={addClick}>
              Add
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default Form;
