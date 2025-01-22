import { useEffect, useState } from 'react';
import styles from '../styles/listaProdutos.module.css';

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  // Função para buscar os dados do servidor
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('http://localhost:3000/DadosdeCelulares');
        if (!response.ok) {
          throw new Error('Erro ao buscar os produtos.');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro:', error.message);
        alert('Erro ao carregar os produtos.');
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className={styles.container}>
      {produtos.map((produto) => (
        <div key={produto.id} className={styles.card}>
          <div className={styles.info}>
            <h2 className={styles.title}>{produto.modelo}</h2>
            <p className={styles.description}>Ano: {produto.ano}</p>
            <p className={styles.description}>Gigas: {produto.gigas}</p>
            <p className={styles.description}>Cor: {produto.cor}</p>
            <p className={styles.price}>Preço: R$ {produto.valor}</p>
            <p className={styles.description}>Tamanho: {produto.tamanho}''</p>
            <p className={styles.description}>
              Desbloqueio: {produto.desbloqueio ? 'Sim' : 'Não'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
