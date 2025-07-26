"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type Theme = "light" | "dark";

interface ThemeContextProps {
  mode: Theme;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  mode: "light",
  toggleMode: () => {},
});

export const ThemeProvider = ({
  children,
  initialMode = "light",
}: {
  children: React.ReactNode;
  initialMode?: Theme;
}) => {
  const [mode, setMode] = useState<Theme>(initialMode);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme;
    if (saved && saved !== mode) {
      setMode(saved);
    }
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    Cookies.set("theme", newMode, { expires: 365 });
    localStorage.setItem("theme", newMode);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeContext);