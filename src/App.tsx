import { useContext } from 'react';
import { NavLink, Route, Routes } from 'react-router';
import { ThemeContext } from './context/ThemeContext.tsx';
import Home from './pages/Home.tsx';
import Ex01Titulo from './pages/Ex01Titulo.tsx';
import Ex02Resize from './pages/Ex02Resize.tsx';
import Ex03Context from './pages/Ex03Context.tsx';
import Ex04Counter from './pages/Ex04Counter.tsx';
import Ex05Favoritos from './pages/Ex05Favoritos.tsx';

const paginas = [
  { caminho: '/', rotulo: 'Início' },
  { caminho: '/exercicio-1', rotulo: '01 · Effect: título' },
  { caminho: '/exercicio-2', rotulo: '02 · Effect: resize' },
  { caminho: '/exercicio-3', rotulo: '03 · Context API' },
  { caminho: '/exercicio-4', rotulo: '04 · Custom Hook' },
  { caminho: '/exercicio-5', rotulo: '05 · Integração' },
];

export default function App() {
  // Consome o tema global disponibilizado em main.tsx.
  const { tema } = useContext(ThemeContext);

  return (
    <div className={`layout ${tema === 'escuro' ? 'dark' : ''}`}>
      <aside className="sidebar">
        <div className="brand">? Laboratório React</div>
        <p>5 exercícios demonstrativos</p>

        <nav aria-label="Exercícios">
          {paginas.map((pagina) => (
            // NavLink aplica a classe active à rota atual.
            <NavLink key={pagina.caminho} to={pagina.caminho} end>
              {pagina.rotulo}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content">
        {/* A URL decide qual página será renderizada. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercicio-1" element={<Ex01Titulo />} />
          <Route path="/exercicio-2" element={<Ex02Resize />} />
          <Route path="/exercicio-3" element={<Ex03Context />} />
          <Route path="/exercicio-4" element={<Ex04Counter />} />
          <Route path="/exercicio-5" element={<Ex05Favoritos />} />
          <Route path="*" element={<h2>Página não encontrada.</h2>} />
        </Routes>
      </main>
    </div>
  );
}
