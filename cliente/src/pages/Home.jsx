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
  [usuarios]
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
          <th>modelo</th>
          <th>ano</th>
          <th>gigas</th>
          <th>cor</th>
          <th>tamanho</th>
          <th>valor</th>
          <th>desbloqueio</th>
         </tr>
          </thead>
          </table>

    {usuarios.map((usuario) =>
        <tr key={usuario.id}>
          <td>{usuario.modelo}</td>
          <td>{usuario.ano}</td>
          <td>{usuario.gigas}</td>
          <td>{usuario.cor}</td>
          <td>{usuario.valor}</td>
          <td>{usuario.tamanho}</td>
          <td>{usuario.desbloqueio}</td>
          <td><button onClick={()=>deletar (usuario.id) }>X</button></td>
          </tr>

    }
      <thead>
      
        {dadosDeCelular.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.nome}</td>
            <td>{usuario.modelo}</td>
            <td>{usuario.ano}</td>
            <td>{usuario.gigas}</td>
            <td>{usuario.cor}</td>
            <td>{usuario.valor}</td>
            <td>{usuario.tamanho}</td>
            <td>{usuario.desbloqueio}</td>
          </tr>
          </thead>
        ))}
      
    </table>
    </div>
      )  );
  
