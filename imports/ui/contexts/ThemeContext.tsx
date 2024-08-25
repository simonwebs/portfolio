// src/context/ThemeContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
  theme: 'default' | 'dark' | 'blue' | 'green' | 'red';
  setTheme: React.Dispatch<React.SetStateAction<'default' | 'dark' | 'blue' | 'green' | 'red'>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'default' | 'dark' | 'blue' | 'green' | 'red'>('default');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
