import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext.tsx';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* O provedor envolve as rotas para manter o tema durante a navegação. */}
    <ThemeProvider>
      {/* Habilita navegação sem recarregar toda a página. */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
