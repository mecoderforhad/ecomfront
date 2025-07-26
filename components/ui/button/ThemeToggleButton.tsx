"use client"

import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useThemeMode } from "@/app/context/ThemeContext";

export default function ThemeToggleButton(){
  const { toggleMode } = useThemeMode();

  return (
    <IconButton onClick={toggleMode}>
      <Brightness4Icon />
    </IconButton>
  );
};
