import { useState } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import styles from "../styles/RegistrosForm.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
=======
import {useNavigate} from "react-router-dom";
>>>>>>> 0fe02435e19d499a55a103211b4ab2e2ec30b0f5

export default function Registrar() {
  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Idade, setIdade] = useState('');
  const [Cpf, setCpf] = useState('');
  const [Endereco, setEndereco] = useState('');
  const [Pais, setPais] = useState('');
  const [Idioma, setIdioma] = useState('');

<<<<<<< HEAD
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
         valor: Valor,
          tamanho:Tamanho,
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
=======
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
>>>>>>> 0fe02435e19d499a55a103211b4ab2e2ec30b0f5

  const navigation = useNavigate();

 const registro = async (event) =>{
  event.preventDefault();
  try {
    const resposta = await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    }); if(resposta.ok){
      navigation('/');
    }

  } catch (error) {
    alert("Ocorreu um erro na aplicação 😕");
  }

 }
  return (
<<<<<<< HEAD
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
  
          

=======
    <main>
     <form action="" onSubmit={registro}>
      <input
      type="text"
      value={nome}
      onChange={(event)=> setNome(event.target.value)}
      />
      <input 
      type="email"
      value={email}
      onChange={(event)=> setEmail(event.target.value)}
      />
      <button>Salvar</button>
     </form>
     </main>
)};
>>>>>>> 0fe02435e19d499a55a103211b4ab2e2ec30b0f5
