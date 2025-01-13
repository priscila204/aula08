import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from '../styles/Form.module.css';

import { useNavigate } from "react-router-dom";

export default function Formulario() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = !!id;
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

  useEffect(() => {
    if (isEdit) {
      const buscaDados = async () => {
        try {
          const resposta = await fetch(`http://localhost:3001/dadosdecelular/${id}`);
          const dados = await resposta.json();
          setDados(dados);
        } catch (err) {
          console.error('Ocorreu um erro no app:', err);
          alert('Ocorreu um erro no app!');
        }
      };
      buscaDados();
    }
  }, [id, isEdit]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = isEdit ? `http://localhost:3000/dadosdecelulares/${id}` : 'http://localhost:3000/dadosdecelulares';
      const method = isEdit ? 'PUT' : 'POST';
      const resposta = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      if (resposta.ok) {
        navigate('/Home');  
      } else {
        const errorData = await resposta.json();
        alert('Ocorreu um erro na aplicação: ' + errorData.message);
      }
    } catch (err) {
      alert('Ocorreu um erro de rede na aplicação');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDados({ ...dados, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input type="text" name="modelo" value={dados.modelo} placeholder="Modelo" onChange={handleChange} />
          <input type="date" name="ano" value={dados.ano} placeholder="Ano" onChange={handleChange} />
          <input type="number" name="gigas" value={dados.gigas} placeholder="Gigas" onChange={handleChange} />

          <div className={styles["password-container"]}>
            <input
              type={showPassword ? "text" : "password"}
              name="desbloqueio"
              value={dados.desbloqueio}
              placeholder="Coloque sua senha: "
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles["toggle-password"]}
            >
              {showPassword ? "Ocultar" : "Mostrar"}
            </button>
          </div>

          <input type="text" name="cor" value={dados.cor} placeholder="Cor" onChange={handleChange} />
          <input type="number" name="valor" value={dados.valor} placeholder="Valor" onChange={handleChange} />
          <input type="number" name="tamanho" value={dados.tamanho} placeholder="Tamanho" onChange={handleChange} />

          <button type="submit">Salvar Alterações</button>
        </form>
      </main>
    </div>
  );
}
