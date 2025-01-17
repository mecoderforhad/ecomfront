"use client";

import MaterialIcon from "@/components/ui/icon/MaterialIcon";
import { useThemeMode } from "flowbite-react";
import { useEffect, useState } from "react";

export function DarkModeSwitcher() {
  const { mode, setMode } = useThemeMode();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-row gap-8 text-cyan-500">
      <div className="flex flex-col items-center gap-2 font-medium text-gray-900 dark:text-gray-400">
        <button
          aria-label="Toggle dark/light mode"
          type="button"
          onClick={toggleMode}
          className="rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          {mode === "dark" ? (
            <MaterialIcon name="light_mode" color="white" />
          ) : (
            <MaterialIcon name="dark_mode" color="black" />
          )}
        </button>
      </div>
    </div>
  );
}