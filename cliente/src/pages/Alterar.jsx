import { useEffect, useState } from "react";

import styles from '../styles/Alterar.module.css';

export default function Alterar() {
  const [produtos, setProdutos] = useState([]);
  const [produtoEditando, setProdutoEditando] = useState(null); // Produto sendo editado
  const [formData, setFormData] = useState({
    modelo: '',
    ano: '',
    gigas: '',
    desbloqueio: '',
    cor: '',
    valor: '',
    tamanho: '',
  });

  // Busca produtos cadastrados
  useEffect(() => {
    const buscarProdutos = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/dadosdecelulares");
        if (!resposta.ok) throw new Error("Erro ao buscar os produtos!");
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (err) {
        console.error("Erro ao buscar os produtos:", err);
        alert("Ocorreu um erro ao carregar os produtos.");
      }
    };
    buscarProdutos();
  }, []);

  // Atualiza os dados de um produto
  const salvarAlteracoes = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch(`http://localhost:3000/dadosdecelulares/${produtoEditando.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (resposta.ok) {
        alert("Produto atualizado com sucesso!");
        // Atualiza a lista de produtos
        const produtosAtualizados = produtos.map((produto) =>
          produto.id === produtoEditando.id ? { ...produtoEditando, ...formData } : produto
        );
        setProdutos(produtosAtualizados);
        setProdutoEditando(null); // Limpa o formulário
        setFormData({
          modelo: '',
          ano: '',
          gigas: '',
          desbloqueio: '',
          cor: '',
          valor: '',
          tamanho: '',
        });
      } else {
        alert("Erro ao atualizar o produto.");
      }
    } catch (err) {
      console.error("Erro ao salvar alterações:", err);
      alert("Ocorreu um erro ao salvar as alterações.");
    }
  };

  // Lida com mudanças no formulário de edição
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Preenche o formulário com os dados do produto para edição
  const editarProduto = (produto) => {
    setProdutoEditando(produto);
    setFormData(produto);
  };

  return (
    <div>
      <h1>Listar e Alterar Produtos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Gigas</th>
            <th>Cor</th>
            <th>Valor</th>
            <th>Tamanho</th>
            <th>Desbloqueio</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.modelo}</td>
              <td>{produto.ano}</td>
              <td>{produto.gigas}</td>
              <td>{produto.cor}</td>
              <td>{produto.valor}</td>
              <td>{produto.tamanho}</td>
              <td>{produto.desbloqueio}</td>
              <td>
                <button onClick={() => editarProduto(produto)}>Alterar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {produtoEditando && (
        <div className={styles.formContainer}>
          <h2>Editando Produto: {produtoEditando.modelo}</h2>
          <form onSubmit={salvarAlteracoes} className={styles.form}>
            <input
              type="text"
              name="modelo"
              value={formData.modelo}
              placeholder="Modelo"
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="ano"
              value={formData.ano}
              placeholder="Ano"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="gigas"
              value={formData.gigas}
              placeholder="Gigas"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="cor"
              value={formData.cor}
              placeholder="Cor"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="valor"
              value={formData.valor}
              placeholder="Valor"
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="tamanho"
              value={formData.tamanho}
              placeholder="Tamanho"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="desbloqueio"
              value={formData.desbloqueio}
              placeholder="Desbloqueio"
              onChange={handleChange}
              required
            />
            <button type="submit">Salvar Alterações</button>
            <button type="button" onClick={() => setProdutoEditando(null)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
