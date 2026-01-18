import PlantillaAuth from "../componentes/PlantillaAuth";
import "./Registrar.css";
import { useState } from "react";


function Registrar() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    console.log(form);
    setMostrarModal(true);
  };

  return (
    <PlantillaAuth>
      <div>
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
      </div>

      {mostrarModal && (
        <div className="modal-registro">
          <div className="modal-registro-contenido">
            <h3>Registro exitoso</h3>
            <p>Tu cuenta ha sido creada correctamente.</p>
            <button onClick={() => setMostrarModal(false)}>
              Ir a iniciar sesión
            </button>
          </div>
        </div>
      )}
    </PlantillaAuth>
  );
}

export default Registrar;
