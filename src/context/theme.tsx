'use client';

import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ITheme {
  theme: Theme;
  toggleTheme(): void;
  isDark: boolean;
  isLight: boolean;
}

const Context = createContext<ITheme | null>(null);

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>(() => {
    let initialTheme: Theme = 'light';

    const savedTheme = localStorage.getItem('theme') as Theme | null;

    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      initialTheme = 'dark';
    }

    return initialTheme;
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  const value: ITheme = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === 'dark',
      isLight: theme === 'light',
    }),
    [theme, toggleTheme],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useThemeContext() {
  const context = useContext(Context);

  if (!context) {
    throw new Error('Theme context not found');
  }

  return context;
}
