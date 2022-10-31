import React from "react";
import { Button } from "@mui/material";

interface IRoundButton {
  label?: string;
  size?: "small" | "medium" | "large" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  sx?: object;
  disabled?: boolean;
  type?: "text" | "contained" | "outlined";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const RoundButton: React.FC<IRoundButton> = ({
  label,
  size,
  onClick,
  sx,
  disabled = false,
  type = "text" || "outlined",
  startIcon,
  endIcon,
}) => {
  return (
    <Button
      size={size}
      sx={{ height: "38px", ...sx }}
      variant={type}
      disabled={disabled}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}>
      {label}
    </Button>
  );
};

export default RoundButton;
