import PlantillaAuth from "../../componentes/PlantillaAuth";
import LoginErrorModal from "./modales/LoginErrorModal";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/auth/Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarError, setMostrarError] = useState(false);

  const navigate = useNavigate();

  const enviarFormulario = (e) => {
    e.preventDefault();

    // VALIDACIÓN BÁSICA FRONTEND
    if (!email || !password) {
      setMostrarError(true);
      return;
    }

    // AQUÍ IRÁ EL BACKEND MÁS ADELANTE
    // login(email, password)

    console.log("Datos enviados:", { email, password });

    // SIMULACIÓN BACKEND
    const credencialesCorrectas = true;
    if (!credencialesCorrectas) {
      setMostrarError(true);
      return;
    }

    // LOGIN EXITOSO → REDIRECCIONAR
    navigate("/dashboard");
  };

  return (
    <PlantillaAuth>
      <p className="logo-frase">"Aprende y construye laboratorios interactivos"</p>
      <div className="formulario-login">
        <form id="formulario-login" onSubmit={enviarFormulario}>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" name="email" placeholder="Ejemplo@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <Link className="olvidaste-contrasena" to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
          <input type="submit" value="Iniciar sesión" className="boton-iniciar-sesion" />
          <Link className="boton-registrarse" to="/registrar">Registrarse</Link>
        </form>
      </div>

      <LoginErrorModal mostrar={mostrarError} cerrar={() => setMostrarError(false)}/>

    </PlantillaAuth>
  );
}

export default Login;