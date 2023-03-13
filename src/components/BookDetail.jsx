import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";

function BookDetail() {
  const navigate = useNavigate();
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
      <Stack flexDirection="row" justifyContent="center" mt={3}>
        <Stack alignItems="center">
          <Stack gap={2}>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Name:
              </Typography>
              <Typography variant="h4">Kumarbaz</Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Author:
              </Typography>
              <Typography variant="h4">Dostoyevski</Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Pages:
              </Typography>
              <Typography variant="h4">180</Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                About:
              </Typography>
              <Typography variant="h4">Kumar</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default BookDetail;
