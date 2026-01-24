import '../../../styles/auth/Modales.css'

function LoginErrorModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Error de inicio de sesión</h3>
        <p>Correo o contraseña incorrectos.</p>
        <button onClick={cerrar}>Intentar nuevamente</button>
      </div>
    </div>
  );
}

export default LoginErrorModal;
