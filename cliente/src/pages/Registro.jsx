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

    return(
        <>
    <table>
        <div className="todos">
        <div className="primeiraPagina">
        <tr>
          <td className="border">tamanho</td>
        </tr>
        
        {
            usuarios.map((usuario) =>
                <tr key={usuario.id}>
            
          <div className="dividir">
            <td>{usuario.tamanho}</td>
          </div>
          </tr>
          )}
          </div>
          
        <div className="segundapagina">
  
          <tr>
          <td className="border">cor</td>
        </tr>
        {
            gmail.map((gmail) =>
                <tr key={cor.id}>
              
          <div className="separar">
            <td>{cor.cor}</td>
          </div>
          </tr>
        )})
  
          

