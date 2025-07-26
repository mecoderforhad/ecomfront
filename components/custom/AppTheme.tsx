"use client";

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useThemeMode } from "@/app/context/ThemeContext";


const AppTheme = ({ children }: { children: React.ReactNode }) => {
  const { mode } = useThemeMode();

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default AppTheme;