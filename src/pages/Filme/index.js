import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

function Filme(params) {
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    async function loadFilme() {
      const res = await api.get(`r-api/?api=filmes/${id}`);
      console.log(res);
      if (res.data.length === 0) {
        // tentou  acessar um id inexistente
        history.replace("/");
      }
      setFilme(res.data);
      setLoading(false);
    }
    loadFilme();
  }, [id, history]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Loading movie</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.nome}s</h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse</h3>
      <p>{filme.sinopse}</p>
      <div className="botoes">
        <button onClick={() => {}}>Salvar</button>
        <button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${filme.nome}+Trailer`}
          >
            Ver trailer
          </a>
        </button>
      </div>
    </div>
  );
}
export default Filme;
