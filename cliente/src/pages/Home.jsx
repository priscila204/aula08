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
<<<<<<< HEAD
    };
    buscarDadosDeCelular();
  }, []);  
=======
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
>>>>>>> 0fe02435e19d499a55a103211b4ab2e2ec30b0f5

  }
  return (
<<<<<<< HEAD
    <div>

    <table className="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
=======
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
>>>>>>> 0fe02435e19d499a55a103211b4ab2e2ec30b0f5
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
