
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Cursos from "./pages/Cursos.tsx";
import Docentes from "./pages/Docentes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/docentes" element={<Docentes />} />
    </Routes>
  </BrowserRouter>
);
