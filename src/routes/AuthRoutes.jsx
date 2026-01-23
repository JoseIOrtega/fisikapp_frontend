import { Routes, Route } from "react-router-dom";
import Login from "../paginas/auth/Login";
import Registrar from "../paginas/auth/Registrar";
import RecuperarContrasena from "../paginas/auth/RecuperarContrasena";
import RestablecerContrasena from "../paginas/auth/RestablecerContrasena";

function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/recuperar-contrasena" element={<RecuperarContrasena />} />
      <Route path="/restablecer-contrasena" element={<RestablecerContrasena />} />
    </Routes>
  );
}

export default AuthRoutes;
