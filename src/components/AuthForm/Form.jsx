import { useState } from "react";
import { Typography, TextField, Box, Button, Container } from "@mui/material";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../firebase";

function Form({ header }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    if (header === "Sign Up") {
      const user = await register(email, password);

      if (user) {
        setEmail("");
        setPassword("");
        navigate("/");
      }
    } else if (header === "Log In") {
      const user = await login(email, password);
      if (user) {
        setEmail("");
        setPassword("");

        navigate("/");
      }
    }
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
          <Typography variant="h4">{header}</Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            size="small"
            autoComplete="false"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box>
            <Button variant="contained" onClick={handleClick}>
              {header}
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
}

export default Form;
