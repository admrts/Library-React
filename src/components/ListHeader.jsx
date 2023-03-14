import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateControl } from "../redux/booksSlice";

function ListHeader() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("addbook");
    dispatch(updateControl("addbook"));
  };
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Typography variant="h4">Book List</Typography>
      <Button onClick={handleClick}>
        <AddCircleIcon />
      </Button>
    </Stack>
  );
}

export default ListHeader;
