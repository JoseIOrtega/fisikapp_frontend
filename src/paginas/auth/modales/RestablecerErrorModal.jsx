import '../../../styles/auth/Modales.css'

function RestablecerErrorModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Error</h3>
        <p>Las contraseñas no coinciden.<br />
           Por favor, verifica e inténtalo nuevamente.</p>
        <button onClick={cerrar}>Cerrar</button>
      </div>
    </div>
  );
}

export default RestablecerErrorModal;
