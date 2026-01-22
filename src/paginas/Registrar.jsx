import PlantillaAuth from "../componentes/PlantillaAuth";
import "./Registrar.css";
import { useState } from "react";
import RegistrarModal from "./RegistrarModal";
import RegistrarErrorModal from "./RegistrarErrorModal";

function Registrar() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [mostrarModalExito, setMostrarModalExito] = useState(false);
  const [mostrarModalError, setMostrarModalError] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setMostrarModalError(true);
      return;
    }

    setMostrarModalExito(true);
  };

  return (
    <PlantillaAuth>
      <form className="formulario-login" onSubmit={handleSubmit}>
        <label>Nombre completo:</label>
        <input
          type="text"
          name="nombre"
          placeholder="Ingrese su nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />

        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese su correo"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="Ingrese una contraseña"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label>Confirmar contraseña:</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Repita la contraseña"
          value={form.confirmPassword}
          onChange={handleChange}
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

      <RegistrarModal mostrar={mostrarModalExito} cerrar={() => setMostrarModalExito(false)}/>
      <RegistrarErrorModal mostrar={mostrarModalError} cerrar={() => setMostrarModalError(false)}/>

    </PlantillaAuth>
  );
}

export default Registrar;
