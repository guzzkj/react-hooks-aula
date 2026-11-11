import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

// Reaproveita estado e persistência em qualquer componente.
export function useLocalStorage<T>(
  chave: string,
  inicial: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [valor, setValor] = useState<T>(() => {
    // Busca o valor salvo quando o estado é inicializado.
    try {
      const salvo = localStorage.getItem(chave);
      return salvo === null ? inicial : (JSON.parse(salvo) as T);
    } catch {
      return inicial;
    }
  });

  useEffect(() => {
    // Persiste sempre que chave ou valor mudar.
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      // Erro de armazenamento não interrompe a demo.
    }
  }, [chave, valor]);

  return [valor, setValor];
}
