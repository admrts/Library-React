import { Button } from "@mui/material";

function CustomButton({ variant, color, onClick, buttonName }) {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {buttonName}
    </Button>
  );
}

export default CustomButton;
