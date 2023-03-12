import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function ListHeader() {
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Typography variant="h4">Book List</Typography>
      <Button>
        <AddCircleIcon />
      </Button>
    </Stack>
  );
}

export default ListHeader;
