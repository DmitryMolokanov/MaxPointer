import { useMemo, useState, FC } from "react";
import { LOKAL_STORAGE_THEM_KEY, Theme, ThemeContext } from "./ThemContext";
LOKAL_STORAGE_THEM_KEY;

const defaultTheme =
  (localStorage.getItem(LOKAL_STORAGE_THEM_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({ theme: theme, setTheme: setTheme }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
