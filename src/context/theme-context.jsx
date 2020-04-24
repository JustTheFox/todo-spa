import React, { useContext, createContext, useState } from 'react';

export const THEMES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.DARK);
  const onSetTheme = () =>
    theme === THEMES.DARK ? setTheme(THEMES.LIGHT) : setTheme(THEMES.DARK);

  return (
    <ThemeContext.Provider
      value={{
        THEMES,
        theme,
        onSetTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
