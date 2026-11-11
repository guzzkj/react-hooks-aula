import { useCounter } from '../hooks/useCounter.ts';

export default function Ex04Counter() {
  // Mesma lógica reutilizada, com estados independentes.
  const a = useCounter(0);
  const b = useCounter(10);

  return (
    <section className="panel">
      <h1>Custom Hook: useCounter</h1>
      <div className="cards">
        <div className="subpanel">
          <h2>Contador A</h2>
          <p className="metric">{a.contador}</p>
          <div className="actions">
            <button onClick={a.aumentar}>+1</button>
            <button onClick={a.diminuir}>-1</button>
            <button className="secondary" onClick={a.reiniciar}>Reiniciar</button>
          </div>
        </div>
        <div className="subpanel">
          <h2>Contador B</h2>
          <p className="metric">{b.contador}</p>
          <div className="actions">
            <button onClick={b.aumentar}>+1</button>
            <button onClick={b.diminuir}>-1</button>
            <button className="secondary" onClick={b.reiniciar}>Reiniciar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
