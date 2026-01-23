import { useState } from "react";
import PlantillaAuth from "../componentes/PlantillaAuth";
import LoginErrorModal from "./LoginErrorModal";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mostrarError, setMostrarError] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();

    // VALIDACIÓN BÁSICA FRONTEND
    if (!email || !password) {
      setMostrarError(true);
      return;
    }

    // AQUÍ IRÁ EL BACKEND
    // login(email, password)

    console.log("Datos enviados:", { email, password });

    // SIMULACIÓN ERROR (backend futuro)
    const credencialesCorrectas = true;
    if (!credencialesCorrectas) {
      setMostrarError(true);
      return;
    }

    // SI TODO SALE BIEN → REDIRECCIONAR
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
          <a className="olvidaste-contrasena" href="/">¿Olvidaste tu contraseña?</a>
          <input type="submit" value="Iniciar sesión" className="boton-iniciar-sesion"/>
          <a className="boton-registrarse" href="/">Registrarse</a>
        </form>
      </div>

      <LoginErrorModal mostrar={mostrarError} cerrar={() => setMostrarError(false)}/>

    </PlantillaAuth>
  );
}

export default Login;
