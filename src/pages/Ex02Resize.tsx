import { useEffect, useState } from 'react';

export default function Ex02Resize() {
  // Guarda a largura inicial da janela.
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    function atualizarLargura() {
      setLargura(window.innerWidth);
    }

    // Registra um listener externo ao React.
    window.addEventListener('resize', atualizarLargura);

    // Cleanup remove o mesmo listener na desmontagem.
    return () => window.removeEventListener('resize', atualizarLargura);
  }, []);

  return (
    <section className="panel">
      <h1>Monitor de largura</h1>
      <p className="metric">{largura}px</p>
      <p>{largura < 768 ? '📱 Mobile' : '🖥️ Desktop'}</p>
    </section>
  );
}
