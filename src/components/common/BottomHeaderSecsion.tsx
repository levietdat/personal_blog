import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const BottomHeaderSecsion = () => {
  return (
    <Stack sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <Typography component="h1" variant="h1" sx={{ fontSize: "100px" }}>
        Blog
      </Typography>
      <Typography
        sx={{
          marginLeft: "6px",
          width: "200px",
          mt: 6,
          color: "#A5A6A3",
          fontSize: "14px",
        }}>
        A blog post is an individual entry or article written by an author for a
        blog.
      </Typography>
    </Stack>
  );
};

export default BottomHeaderSecsion;
