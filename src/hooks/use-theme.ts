import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export function useTheme(storageKey: string = "vite-ui-theme", defaultTheme: Theme = "dark") {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    } catch (error) {
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      console.error("Error setting theme to localStorage:", error);
    }
  }, [theme, storageKey]);

  return { theme, setTheme };
}
