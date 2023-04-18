"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiMoon } from "react-icons/hi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-2 bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-full dark:bg-transparent flex items-center justify-center hover:ring-2 hover:ring-offset-2 ring-gray-300 dark:hover:ring-2 dark:hover:ring-offset-2 dark:ring-gray-200 transition-all"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {mounted && (
        <>
          {resolvedTheme === "dark" ? (
            <HiOutlineSun size={24} />
          ) : (
            <HiMoon size={24} />
          )}
        </>
      )}
    </button>
  );
};

export default ThemeSwitch;
