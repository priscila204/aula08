import { useEffect, useState } from "react";

export default function Home() {
  const [dadosDeCelular, setDadosDeCelular] = useState([]);

  useEffect(() => {
    const buscarDadosDeCelular = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/DadosdeCelulares");
        const dados = await resposta.json();
        setDadosDeCelular(dados);
      } catch {
        alert("Ocorreu um erro ao buscar os dados!");
      }
    };
    buscarDadosDeCelular();
  }, []);

  const deletar = async (id) => {
    try {
      const resposta = await fetch(`http://localhost:3000/DadosdeCelulares/${id}`, {
        method: "DELETE",
      });

      if (resposta.ok) {
        setDadosDeCelular((prevDados) => prevDados.filter((item) => item.id !== id));
        alert("Registro deletado com sucesso!");
      } else {
        alert("Erro ao deletar o registro.");
      }
    } catch {
      alert("Ocorreu um erro ao deletar o registro.");
    }
  };

  return (
    <div>
      <h1>Lista de Celulares</h1>
      <table className="tabela">
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Gigas</th>
            <th>Cor</th>
            <th>Tamanho</th>
            <th>Valor</th>
            <th>Desbloqueio</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {dadosDeCelular.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.modelo}</td>
              <td>{usuario.ano}</td>
              <td>{usuario.gigas}</td>
              <td>{usuario.cor}</td>
              <td>{usuario.tamanho}</td>
              <td>{usuario.valor}</td>
              <td>{usuario.desbloqueio}</td>
              <td>
                <button onClick={() => deletar(usuario.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
