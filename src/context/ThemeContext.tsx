import { createContext, useState, type ReactNode } from 'react';

export type Tema = 'claro' | 'escuro';

interface ThemeContextValue {
  tema: Tema;
  alternarTema: () => void;
}

// Cria o contexto; o valor será disponibilizado pelo Provider.
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextValue>({
  tema: 'claro',
  alternarTema: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  // O estado está acima das páginas da aplicação.
  const [tema, setTema] = useState<Tema>('claro');

  function alternarTema() {
    setTema(anterior => anterior === 'claro' ? 'escuro' : 'claro');
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
