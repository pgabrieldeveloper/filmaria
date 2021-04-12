import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Favoritos(params) {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const myList = localStorage.getItem("filmes");
    setFilmes(JSON.parse(myList) || []);
  }, []);
  return (
    <div className="meus-filmes">
      <h1>Meus Filmes</h1>
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes </Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
