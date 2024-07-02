import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider

// it provide us access of all content of context
export default function useTheme() {
    return useContext(ThemeContext)
}