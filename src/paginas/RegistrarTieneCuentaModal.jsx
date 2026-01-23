
function RegistrarTieneCuentaModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Error</h3>
        <p>Este correo ya se encuentra registrado.<br />
           Por favor, inicia sesión o recupera tu contraseña.
        </p>
        <button onClick={cerrar}>Ir a iniciar sesión</button>
      </div>
    </div>
  );
}

export default RegistrarTieneCuentaModal;
