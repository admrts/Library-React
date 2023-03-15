import { Container, Typography, Stack } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { useNavigate } from "react-router-dom";
import { logout } from "../firebase";
import { useDispatch } from "react-redux";
import { logout as logoutHandle } from "../redux/authSlice";
import { useSelector } from "react-redux";
import { CustomButton } from "./";

function ProfilPage() {
  const { totalBooks, totalPages } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  const logoutClick = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/");
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
        <CustomButton
          variant={"contained"}
          color={"error"}
          onClick={logoutClick}
          buttonName={"Log Out"}
        />
      </Stack>
      <Stack flexDirection="row" justifyContent="center" mt={3}>
        <Stack alignItems="center">
          <Stack gap={2}>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Total Books:
              </Typography>
              <Typography variant="h4">{totalBooks}</Typography>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              <Typography variant="h4" sx={{ textDecoration: "underline" }}>
                Total Pages:
              </Typography>
              <Typography variant="h4">{totalPages}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ProfilPage;
