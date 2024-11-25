import { useEffect, useState } from "react";

export default function Registrar() {

  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');

 const registro = async (event) =>{
  event.preventDefault();
  try {
    await fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        email: email
      })
    });
  } catch (error) {
    alert("Ocorreu um erro na aplicação 😕");
  }

 }


  return (
    <main>
     <form action="" onSubmit={registro}>
      <input
      type="text"
      value={nome}
      onChange={(event)=> setnome(event.target.value)}
      />
      <input 
      type="email"
      value={email}
      onChange={(event)=> setemail(event.target.value)}
      />
      <button>Salvar</button>
     </form>
     </main>
)};