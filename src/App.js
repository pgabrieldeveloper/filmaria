import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
