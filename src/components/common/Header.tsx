import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  return (
    <Stack
      sx={{
        position: "fixed",
        top: "0",
        width: "100%",
        height: "46px",
        backgroundColor: "#3C3F3E",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        color: "#FFFFFF",
        padding: " 0 12px",
        alignItems: "center",
      }}>
      <Typography>LOGO</Typography>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <Typography sx={{ marginRight: "6px" }}>Acount</Typography>
        <AccountCircleOutlinedIcon />
      </Stack>
    </Stack>
  );
};

export default Header;
