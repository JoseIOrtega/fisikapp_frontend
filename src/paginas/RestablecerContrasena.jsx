import { useState } from "react";
import PlantillaAuth from "../componentes/PlantillaAuth";
import RestablecerErrorModal from "./RestablecerErrorModal";
import RestablecerExitoModal from "./RestablecerExitoModal";
import RestablecerTokenModal from "./RestablecerTokenModal";
import "./RestablecerContrasena.css";

function RestablecerContrasena() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [mostrarModalError, setMostrarModalError] = useState(false);
  const [mostrarModalExito, setMostrarModalExito] = useState(false);
  const [mostrarModalToken, setMostrarModalToken] = useState(false);

  const enviarFormulario = (e) => {
    e.preventDefault();

    // VALIDACIÓN FRONTEND
    if (password !== confirmPassword) {
      setMostrarModalError(true);
      return;
    }

    // SIMULACIÓN BACKEND (token)
    const tokenValido = true; // luego vendrá del backend
    if (!tokenValido) {
      setMostrarModalToken(true);
      return;
    }

    // TODO OK
    setMostrarModalExito(true);
  };

  return (
    <PlantillaAuth>
      <p className="logo-frase-recuperar">Restablecer contraseña</p>

      <form
        id="formulario-nueva-contrasena"
        className="formulario-login"
        onSubmit={enviarFormulario}
      >
        <label htmlFor="password">Nueva contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese una contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repita la contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <input
          type="submit"
          value="Guardar nueva contraseña"
          className="boton-nueva-contrasena"
        />
      </form>

      {/* MODALES */}
      <RestablecerErrorModal
        mostrar={mostrarModalError}
        cerrar={() => setMostrarModalError(false)}
      />

      <RestablecerExitoModal
        mostrar={mostrarModalExito}
        cerrar={() => setMostrarModalExito(false)}
      />

      <RestablecerTokenModal
        mostrar={mostrarModalToken}
        cerrar={() => setMostrarModalToken(false)}
      />
    </PlantillaAuth>
  );
}

export default RestablecerContrasena;
