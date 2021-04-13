import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <Link className="logo" to="/">
          Filmaria
        </Link>
        <Link className="favoritos" to="/favoritos">
          Salvos
        </Link>
      </header>
      <div className="contato">
        <a target="blank" href="https://github.com/pgabrieldeveloper">
          Git Hub
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/paulo-gabriel-gomes-matias-969b041b8/"
        >
          Linkedin
        </a>
      </div>
    </>
  );
}

export default Header;
