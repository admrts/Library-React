import { useState } from "react";
import { Typography, TextField, Box, Button, Container } from "@mui/material";

function Form() {
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [about, setAbout] = useState("");

  const handleClick = () => {
    console.log(bookName + author + pages);
  };
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
            <Button variant="contained" onClick={handleClick}>
              Add
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default Form;
