import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from '../styles/Alterar.module.css';

import { useNavigate } from "react-router-dom";

export default function Registrar() {
  const navigate = useNavigate();
  const { id } = useParams(); // Recupera o ID da URL.
  const isEdit = !!id; // Verifica se está em modo de edição.
  const [dados, setDados] = useState({
    modelo: '',
    ano: '',
    gigas: '',
    desbloqueio: '',
    cor: '',
    valor: '',
    tamanho: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  // Busca os dados existentes se estiver em modo de edição.
  useEffect(() => {
    if (isEdit) {
      const buscaDados = async () => {
        try {
          const resposta = await fetch(`http://localhost:3000/dadosdecelulares/${id}`);
          if (!resposta.ok) throw new Error("Erro ao buscar os dados!");
          const dados = await resposta.json();
          setDados(dados);
        } catch (err) {
          console.error("Erro ao buscar os dados:", err);
          alert("Ocorreu um erro ao carregar os dados para edição.");
        }
      };
      buscaDados();
    }
  }, [id, isEdit]);

  // Manipula o envio do formulário.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = isEdit
        ? `http://localhost:3000/dadosdecelulares/${id}` // Atualiza um item existente.
        : 'http://localhost:3000/dadosdecelulares'; // Cria um novo item.
      const method = isEdit ? 'PUT' : 'POST';
      const resposta = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });

      if (resposta.ok) {
        alert(isEdit ? "Dados alterados com sucesso!" : "Dados cadastrados com sucesso!");
        navigate('/Home'); // Redireciona para a página inicial.
      } else {
        const errorData = await resposta.json();
        alert('Erro ao salvar: ' + (errorData.message || "Erro desconhecido."));
      }
    } catch (err) {
      console.error("Erro ao salvar:", err);
      alert('Ocorreu um erro ao salvar os dados.');
    }
  };

  // Atualiza o estado com as mudanças no formulário.
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  // Alterna a visibilidade do campo de senha.
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <main className={styles.main}>
        <h1>{isEdit ? "Alterar Dados do Celular" : "Cadastrar Novo Celular"}</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="modelo" value={dados.modelo} placeholder="Modelo" onChange={handleChange} required />
          <input type="date" name="ano" value={dados.ano} placeholder="Ano" onChange={handleChange} required />
          <input type="number" name="gigas" value={dados.gigas} placeholder="Gigas" onChange={handleChange} required />

          <div className={styles["password-container"]}>
            <input
              type={showPassword ? "text" : "password"}
              name="desbloqueio"
              value={dados.desbloqueio}
              placeholder="Senha"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles["toggle-password"]}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <input type="text" name="cor" value={dados.cor} placeholder="Cor" onChange={handleChange} required />
          <input type="number" name="valor" value={dados.valor} placeholder="Valor" onChange={handleChange} required />
          <input type="number" name="tamanho" value={dados.tamanho} placeholder="Tamanho" onChange={handleChange} required />

          <button type="submit">
            {isEdit ? "Salvar Alterações" : "Cadastrar"}
          </button>
        </form>
      </main>
    </div>
  );
}
