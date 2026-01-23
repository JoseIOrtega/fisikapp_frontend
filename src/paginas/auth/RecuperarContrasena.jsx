import PlantillaAuth from "../../componentes/PlantillaAuth";
import RecuperarContrasenaModal from "./modales/RecuperarContrasenaModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth/RecuperarContrasena.css";

function RecuperarContrasena() {

  const [email, setEmail] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();

    // AQUÍ IRÁ EL BACKEND MÁS ADELANTE
    // recuperarContrasena(email)

    console.log("Correo enviado:", email);
    setMostrarModal(true);
  };

  return (
    <PlantillaAuth>
      <p className="logo-frase-recuperar">¿Olvidaste tu contraseña?</p>

      <form
        id="formulario-olvidaste"
        className="formulario-olvidaste"
        onSubmit={enviarFormulario}
      >
        <label className="olvidaste-mensaje">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </label>

        <input
          type="email"
          name="email"
          placeholder="Ingrese su correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="submit"
          value="Enviar enlace de recuperación"
          className="boton-envio-enlace"
        />

        <Link className="boton-volver-iniciar-sesion" to="/">
          Volver a iniciar sesión
        </Link>
      </form>

      <RecuperarContrasenaModal
        mostrar={mostrarModal}
        cerrar={() => setMostrarModal(false)}
      />
    </PlantillaAuth>
  );
}

export default RecuperarContrasena;

