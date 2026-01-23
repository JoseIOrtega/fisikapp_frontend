import PlantillaAuth from "../componentes/PlantillaAuth";
import RegistrarExitoModal from "./RegistrarExitoModal";
import RegistrarErrorModal from "./RegistrarErrorModal";
import RegistrarTieneCuentaModal from "./RegistrarTieneCuentaModal";
import { useState } from "react";
import "./Registrar.css";


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

  const enviarFormulario = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMostrarModalError(true);
      return;
    }

    // ESTE CASO SE USARÁ CUANDO HAYA BACKEND
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

        <a className="boton-tienes-cuenta" href="/">
          ¿Ya tienes cuenta? Inicia sesión
        </a>
      </form>

      <RegistrarExitoModal mostrar={mostrarModalExito} cerrar={() => setMostrarModalExito(false)}/>
      <RegistrarErrorModal mostrar={mostrarModalError} cerrar={() => setMostrarModalError(false)}/>
      <RegistrarTieneCuentaModal mostrar={mostrarModalTieneCuenta} cerrar={() => setMostrarModalTieneCuenta(false)}/>


    </PlantillaAuth>
  );
}

export default Registrar;
