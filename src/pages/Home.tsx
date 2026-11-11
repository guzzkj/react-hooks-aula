export default function Home() {
  return (
    <section className="panel">
      <span className="eyebrow">Aula prática · SPA</span>
      <h1>React Hooks, Context API e React Router</h1>
      <p>Use o menu lateral para navegar entre os cinco exercícios.</p>
      <ol>
        <li>Sincronizar título com useEffect.</li>
        <li>Monitorar janela e remover listener.</li>
        <li>Compartilhar tema pelo Context API.</li>
        <li>Reutilizar lógica com useCounter.</li>
        <li>Salvar favoritos usando useLocalStorage.</li>
      </ol>
    </section>
  );
}
