import { useEffect, useState } from "react";

export default function Home() {
  const [dadosDeCelular, setDadosDeCelular] = useState([]);

  useEffect(() => {
    const buscarDadosDeCelular = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setDadosDeCelular(dados);
      } catch {
        alert("Ocorreu um erro ao buscar os dados!");
      }

    };
    buscarDadosDeCelular();
  }, []);  

    }
    buscarUsuario();
  }, [usuarios])
  const deletar = async (id) =>{
    try{
      await fetch('http://localhost:3000/usuarios/'+ id,{
        method:'DELETE'
      });
    }catch{
      alert("vish maria... Deu errado em");
    }

  }
  return (

    <div>

    <table className="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>

    <table>
      <tr>
        <td>Nome</td>
        <td>E-mail</td>
      </tr>
      {usuarios.map((usuario) =>
        <tr key={usuario.id}>
          <td>{usuario.nome}</td>
          <td>{usuario.email}</td>
          <td><button onClick={()=>deletar (usuario.id) }>X</button></td>

        </tr>
      </thead>
      <tbody>
        {dadosDeCelular.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.nome}</td>
            <td>{usuario.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
