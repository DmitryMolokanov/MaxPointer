import { LOKAL_STORAGE_THEM_KEY, Theme } from "./ThemContext";
import { useContext } from "react";
import { ThemeContext } from "./ThemContext";

interface useThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): useThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    localStorage.setItem(LOKAL_STORAGE_THEM_KEY, newTheme);
  };

  return { theme, toggleTheme };
}
