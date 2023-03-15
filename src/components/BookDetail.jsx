import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { deleteData } from "../firebase";
import { useDispatch } from "react-redux";
import { updateControl } from "../redux/booksSlice";
import { CustomButton } from "./";

function BookDetail() {
  const dispatch = useDispatch();
  const { bookDetail } = useSelector((store) => store.books);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    console.log(bookDetail);
  };

  const deleteClick = () => {
    if (window.confirm("This book is deleted. Are you sure ?")) {
      deleteData(bookDetail[0].id);
      setTimeout(function () {
        navigate("/");
      }, 2000);
    }
  };
  const updateClick = () => {
    navigate("addbook");
    dispatch(updateControl("update"));
  };

  return (
    <Container>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        gap={1}
        mt={1}
      >
        <Stack flexDirection="row" alignItems="center" gap={2}>
          <ArrowCircleLeftIcon
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          />
          <Typography
            variant="h6"
            onClick={handleClick}
            sx={{ cursor: "pointer" }}
          >
            Book List
          </Typography>
        </Stack>
        <Stack flexDirection="row" alignItems="center">
          <CustomButton
            color={"error"}
            onClick={deleteClick}
            variant={"text"}
            buttonName={"Delete"}
          />
          <CustomButton
            color={"success"}
            onClick={updateClick}
            variant={"text"}
            buttonName={"Update"}
          />
        </Stack>
      </Stack>
      <Stack flexDirection="row" justifyContent="center" mt={3}>
        <Stack alignItems="center">
          <Stack gap={2}>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Name:
              </Typography>
              <Typography variant="h4">
                {bookDetail.length > 0 ? bookDetail[0].bookName : ""}
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Author:
              </Typography>
              <Typography variant="h4">
                {bookDetail.length > 0 ? bookDetail[0].author : ""}
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Pages:
              </Typography>
              <Typography variant="h4">
                {bookDetail.length > 0 ? bookDetail[0].pages : ""}
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                About:
              </Typography>
              <Typography variant="h4">
                {bookDetail.length > 0 ? bookDetail[0].about : ""}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default BookDetail;
