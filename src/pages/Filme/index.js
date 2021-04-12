import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
  function saveMovie() {
    const myList = localStorage.getItem("filmes");

    let moviesSaves = JSON.parse(myList) || [];

    const hasMovie = moviesSaves.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );
    if (hasMovie) {
      toast.info("Este filme ja foi salvo");
      return;
    }
    moviesSaves.push(filme);
    localStorage.setItem("filmes", JSON.stringify(moviesSaves));
    toast.success("Filme salvo com sucesso");
  }
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
        <button onClick={saveMovie}>Salvar</button>
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
