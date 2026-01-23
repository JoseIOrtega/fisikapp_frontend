function RestablecerExitoModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Contraseña actualizada</h3>
        <p>Tu contraseña ha sido actualizada correctamente.<br />
           Ya puedes iniciar sesión con tu nueva contraseña.
        </p>
        <button onClick={cerrar}>Ir a iniciar sesión</button>
      </div>
    </div>
  );
}

export default RestablecerExitoModal;
