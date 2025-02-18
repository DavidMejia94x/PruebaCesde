import React from "react";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <h1>Gestión de Cursos CESDE</h1>
      <nav>
        <ul>
          <li>
            <Link to="/cursos">📚 Ver Cursos</Link>
          </li>
          <li>
            <Link to="/docentes">👨‍🏫 Ver Docentes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;
