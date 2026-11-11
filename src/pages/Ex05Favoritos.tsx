import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';
import { useLocalStorage } from '../hooks/useLocalStorage.ts';

const tecnologias = ['React', 'Vite', 'React Router', 'JavaScript'];

export default function Ex05Favoritos() {
  const { tema } = useContext(ThemeContext);
  const [favoritos, setFavoritos] = useLocalStorage<string[]>('lab-favoritos', []);

  function alternar(nome: string) {
    // Cria um novo array: adiciona ou remove o item selecionado.
    setFavoritos(anteriores =>
      anteriores.includes(nome)
        ? anteriores.filter(item => item !== nome)
        : [...anteriores, nome]
    );
  }

  return (
    <section className="panel">
      <h1>Favoritos persistentes</h1>
      <p>Tema: {tema} | Favoritos: {favoritos.length}</p>
      <div className="cards">
        {tecnologias.map(nome => (
          <div className="subpanel" key={nome}>
            <h2>{nome}</h2>
            <button onClick={() => alternar(nome)}>
              {favoritos.includes(nome) ? 'Remover' : 'Favoritar'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
