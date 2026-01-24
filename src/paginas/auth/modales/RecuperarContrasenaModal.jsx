import { Link } from "react-router-dom";
import '../../../styles/auth/Modales.css'

function RecuperarContrasenaModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Solicitud enviada</h3>
        <p>Si el correo se encuentra registrado, recibirás un enlace para restablecer tu contraseña.</p>
        <Link to="/" className="boton-volver-login" onClick={cerrar}>Volver a iniciar sesión</Link>

      </div>
    </div>
  );
}

export default RecuperarContrasenaModal;
