import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/RegistrosForm.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Registrar() {
  const [modelo, setmodelo] = useState('');
  const [gigas, setgigas] = useState('');
  const [ano, setano] = useState('');
  const [cor, setcor] = useState('');
  const [tamanho, settamanho] = useState('');
  const [desbloqueio, setdesbloqueio] = useState('');


  const navigate = useNavigate();

  const registrar = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch("http://localhost:3001/dadoscelular", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          modelo: Modelo,
          ano: Ano,
          gigas: Gigas,
          cor: Cor,
         valor: valor,
          tamanho:tamanho,
          desbloqueio:desbloqueio
        }),
      });

      if (resposta.ok) {
        alert("Registro realizado com sucesso!");
        navigate("/alguma-rota");
      } else {
        alert("Erro ao registrar.");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={registrar} className={styles.form}>
        {/* Adicione aqui as caracteristicas produto no formulário para modelo,ano.cor,valor,gigas,tamanho */}
      </form>
      <Footer />
    </div>
  );
}

return (
  <div>
    <table>
      <thead>
        <tr>
          <th className="border">Tamanho</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.tamanho}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <table>
      <thead>
        <tr>
          <th className="border">Cor</th>
        </tr>
      </thead>
      <tbody>
        {gmail.map((item) => (
          <tr key={item.id}>
            <td>{item.cor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
