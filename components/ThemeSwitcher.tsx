"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  function handleThemeChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="text-black dark:text-white">
      <button
        className="rouded-full p-2 text-3xl"
        onClick={handleThemeChange}
      >
        {theme === "light" ? "🌜" : "🌞"}
      </button>
    </div>
  );
}
