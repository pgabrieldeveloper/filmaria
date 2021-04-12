import { Link } from "react-router-dom";
import "./style.css";

function NotFound() {
  return (
    <div>
      <h1>Page Not Found 404 :( </h1>
      <p>Algumas paginas que vc pode estar tentando acessar</p>
      <div className="links">
        <Link to="/favoritos"> Salvos </Link>
        <Link to="/">Filmes</Link>
      </div>
    </div>
  );
}

export default NotFound;
