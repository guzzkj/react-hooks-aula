import { useState } from 'react';

// Encapsula a lógica do contador; cada chamada mantém seu próprio estado.
export function useCounter(inicial = 0) {
  const [contador, setContador] = useState(inicial);

  return {
    contador,
    aumentar: () => setContador(c => c + 1),
    diminuir: () => setContador(c => c - 1),
    reiniciar: () => setContador(inicial),
  };
}
