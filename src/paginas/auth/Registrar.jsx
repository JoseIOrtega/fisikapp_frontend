import PlantillaAuth from "../../componentes/PlantillaAuth";
import RegistrarExitoModal from "./modales/RegistrarExitoModal";
import RegistrarErrorModal from "./modales/RegistrarErrorModal";
import RegistrarTieneCuentaModal from "./modales/RegistrarTieneCuentaModal";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/auth/Registrar.css";

function Registrar() {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [mostrarModalExito, setMostrarModalExito] = useState(false);
  const [mostrarModalError, setMostrarModalError] = useState(false);
  const [mostrarModalTieneCuenta, setMostrarModalTieneCuenta] = useState(false);

  const cambiarCampo = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const cerrarTodosLosModales = () => {
    setMostrarModalExito(false);
    setMostrarModalError(false);
    setMostrarModalTieneCuenta(false);
  };

  const enviarFormulario = (e) => {
    e.preventDefault();

    cerrarTodosLosModales();

    if (form.password !== form.confirmPassword) {
      setMostrarModalError(true);
      return;
    }

    // BACKEND FUTURO
    // if (correoYaRegistrado) {
    //   setMostrarModalTieneCuenta(true);
    //   return;
    // }

    setMostrarModalExito(true);
  };

  return (
    <PlantillaAuth>
      <p className="logo-frase-registro">Registro - Crear cuenta</p>

      <form className="formulario-login" onSubmit={enviarFormulario}>

        <label>Nombre completo:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre"
          value={form.nombre}
          onChange={cambiarCampo}
          required
        />

        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su correo"
          value={form.email}
          onChange={cambiarCampo}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese una contraseña"
          value={form.password}
          onChange={cambiarCampo}
          required
        />

        <label>Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repita la contraseña"
          value={form.confirmPassword}
          onChange={cambiarCampo}
          required
        />

        <input
          type="submit"
          value="Crear cuenta"
          className="boton-crear-cuenta"
        />

        <Link className="boton-tienes-cuenta" to="/">
          ¿Ya tienes cuenta? Inicia sesión
        </Link>

      </form>

      <RegistrarExitoModal
        mostrar={mostrarModalExito}
        cerrar={cerrarTodosLosModales}
      />

      <RegistrarErrorModal
        mostrar={mostrarModalError}
        cerrar={cerrarTodosLosModales}
      />

      <RegistrarTieneCuentaModal
        mostrar={mostrarModalTieneCuenta}
        cerrar={cerrarTodosLosModales}
      />

    </PlantillaAuth>
  );
}

export default Registrar;

