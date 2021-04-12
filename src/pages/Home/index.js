import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./style.css";
function Home() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function loadaFilmes() {
      const { data } = await await api.get("r-api/?api=filmes");
      console.log(data);
      setFilmes(data);
    }
    loadaFilmes();
  }, []);
  return (
    <div className="container">
      <main className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.nome}</strong>
              <img src={filme.foto} alt="filme.nome" />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </main>
    </div>
  );
}

export default Home;
