import { createContext, type ReactNode } from 'react';

export type Tema = 'claro' | 'escuro';

interface ThemeContextValue {
  tema: Tema;
  alternarTema: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextValue>({
  tema: 'claro',
  alternarTema: () => {},
});

// Placeholder: será implementado no exercício 03.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
