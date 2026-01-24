import '../../../styles/auth/Modales.css'

import { Link } from "react-router-dom";

function RegistrarExitoModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Registro exitoso</h3>
        <p>Tu cuenta ha sido creada correctamente.</p>
        <Link to="/" className="boton-volver-login" onClick={cerrar}>
          Ir a iniciar sesión
        </Link>
      </div>
    </div>
  );
}

export default RegistrarExitoModal;
