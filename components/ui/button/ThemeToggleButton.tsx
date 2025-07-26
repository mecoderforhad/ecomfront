"use client";

import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeMode } from "@/app/context/ThemeContext";

export default function ThemeToggleButton() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <IconButton onClick={toggleMode}>
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
