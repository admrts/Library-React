import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

function ListHeader() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("addbook");
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
