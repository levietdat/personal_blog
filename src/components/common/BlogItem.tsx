import { Box, Typography, Stack } from "@mui/material";
interface IBlogItem {
  title: string;
  imageLink: string;
  content?: string;
  icon: JSX.Element;
  heart: number;
  updateAt: string;
  sx: object;
}
const BlogItem: React.FC<IBlogItem> = ({
  title,
  imageLink,
  content,
  icon,
  heart,
  updateAt,
  sx,
}) => {
  return (
    <Box sx={{ sx }}>
      <img
        alt="Blog Item"
        src={imageLink}
        style={{ width: "100%", height: "183px", objectFit: "cover" }}
      />
      <Typography sx={{ fontSize: "16px" }}>{title}</Typography>
      <Stack sx={{ display: "flex" }}>
        <Stack sx={{ display: "flex" }}>
          {icon} <Typography>{heart}</Typography>
        </Stack>
        <Stack>{updateAt}</Stack>
      </Stack>
    </Box>
  );
};

export default BlogItem;
