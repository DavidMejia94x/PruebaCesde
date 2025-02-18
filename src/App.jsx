import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Gestión de Cursos CESDE</h1>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "10px" }}>
            <Link to="/cursos">📚 Ver Cursos</Link>
          </li>
          <li style={{ margin: "10px" }}>
            <Link to="/docentes">👨‍🏫 Ver Docentes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
