import PlantillaAuth from '../componentes/PlantillaAuth'
import RecuperarContrasenaModal from "./RecuperarContrasenaModal";
import { useState } from "react";
import "./RecuperarContrasena.css"


function RecuperarContrasena() {
  const [email, setEmail] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);


  const enviarFormulario = (e) => {
    e.preventDefault();

    // aquí irá el backend más adelante
    setMostrarModal(true);
  };

  return (
    <PlantillaAuth>
      <p className="logo-frase-recuperar">¿Olvidaste tu contraseña?</p>
      <form id="formulario-olvidaste" className="formulario-olvidaste" onSubmit={enviarFormulario}>
        <label className="olvidaste-mensaje">Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</label>
        <input type="email" name="email" placeholder="Ingrese su correo" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input type="submit" value="Enviar enlace de recuperación" className="boton-envio-enlace"/>
        <a className="boton-volver-iniciar-sesion">Volver a iniciar sesión</a>
      </form>
      <RecuperarContrasenaModal mostrar={mostrarModal} cerrar={() => setMostrarModal(false)} />

    </PlantillaAuth>
  )
}

export default RecuperarContrasena;
