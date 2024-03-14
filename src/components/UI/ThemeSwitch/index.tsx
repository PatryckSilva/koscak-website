"use client";
import { useTheme } from "next-themes";
import { PiSunBold, PiMoonBold } from "react-icons/pi";
export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button onClick={() => setTheme(isDark ? "light" : "dark")} className={``}>
      <span>
        {isDark ? (
          <PiSunBold className="h-4 w-4 text-neutral-500 dark:text-white" />
        ) : (
          <PiMoonBold className="h-4 w-4 text-neutral-500 dark:text-white" />
        )}
      </span>
    </button>
  );
};
