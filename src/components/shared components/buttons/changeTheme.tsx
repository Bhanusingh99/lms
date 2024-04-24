"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Switcher() {
  const { theme, setTheme } = useTheme();
  const [defaultTheme, setDefaultTheme] = useState(theme);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setDefaultTheme("dark");
    } else {
      setTheme("light");
      setDefaultTheme("light");
    }
  };

  return (
    <div className="flex-center gap-4 max-sm:gap-2">
      <Moon
        className={`${defaultTheme === "light" ? "text-[#F98A87]" : "text-gray-500"} max-sm:size-6`}
      />
      <div
        onClick={toggleTheme}
        className={`flex h-5 w-12 cursor-pointer items-center rounded-[11px] bg-[#5B5C5E] ${
          defaultTheme === "light"
            ? "justify-start"
            : "justify-end bg-[#C6CBD9]"
        }`}
      >
        <div
          className={`size-6 rounded-full ${theme === "light" ? "cyan" : "cyan"}`}
        ></div>
      </div>
      <Sun
        className={`${defaultTheme === "dark" ? "text-[#F98A87]" : "text-gray-500"}`}
      />
    </div>
  );
}
