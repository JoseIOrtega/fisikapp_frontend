import { BrowserRouter, Routes, Route } from "react-router-dom";

// AUTH
import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import RecuperarContrasena from "./paginas/RecuperarContrasena";
import RestablecerContrasena from "./paginas/RestablecerContrasena";

// DASHBOARD (más adelante)
// import Dashboard from "./paginas/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTENTICACIÓN */}
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
        <Route path="/restablecer-contrasena" element={<RestablecerContrasena />} />

        {/* DASHBOARD */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;

