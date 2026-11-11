import { useEffect, useState } from 'react';

export default function Ex01Titulo() {
  // Estado local que controla o número de cliques.
  const [cliques, setCliques] = useState(0);

  useEffect(() => {
    // Sincroniza o título da aba com o estado.
    document.title = `Cliques: ${cliques} | Laboratório React`;

    // Restaura o título quando o efeito for limpo.
    return () => {
      document.title = 'Laboratório React: Hooks e Context';
    };
  }, [cliques]); // O efeito acompanha as alterações de cliques.

  return (
    <section className="panel">
      <h1>Contador e título da aba</h1>
      <p className="metric">{cliques} cliques</p>
      <button onClick={() => setCliques(c => c + 1)}>
        Adicionar clique
      </button>
    </section>
  );
}
