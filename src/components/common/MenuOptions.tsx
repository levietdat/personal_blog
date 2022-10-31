import React from "react";
import { Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const MenuOptions = () => {
  const _renderTab = () => {
    const [value, setValue] = React.useState("Home");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
    return (
      <Box
        sx={{
          borderBottom: "#ccc 1px solid",
          width: "100%",
        }}>
        <Tabs
          sx={{
            color: "#3C3F3E",
            "& .MuiTabs-indicator": {
              backgroundColor: "#3C3F3E",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#3C3F3E",
              fontWeight: "600",
            },
          }}
          value={value}
          onChange={handleChange}
          scrollButtons
          allowScrollButtonsMobile>
          <Tab label="Home" />
          <Tab label="About" />
        </Tabs>
      </Box>
    );
  };

  return <Stack>{_renderTab()}</Stack>;
};

export default MenuOptions;
