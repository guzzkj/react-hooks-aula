import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.tsx';

export default function Ex03Context() {
  // Consome valor compartilhado sem passar props intermediárias.
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <section className="panel">
      <h1>Context API</h1>
      <p>Tema atual: <strong>{tema}</strong></p>
      <button onClick={alternarTema}>Alternar tema</button>
    </section>
  );
}
