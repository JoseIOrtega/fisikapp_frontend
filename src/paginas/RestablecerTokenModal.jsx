function RestablecerTokenModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Enlace no válido</h3>
        <p>El enlace para restablecer la contraseña es inválido o ha vencido.Por favor solicita uno nuevo.</p>
        <button onClick={cerrar}>
          Solicitar nuevo enlace
        </button>
      </div>
    </div>
  );
}

export default RestablecerTokenModal;
