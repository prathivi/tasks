"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Button } from "../ui/button";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <MdOutlineDarkMode className="size-5" />
      ) : (
        <MdOutlineLightMode className="size-5" />
      )}
    </Button>
  );
}
