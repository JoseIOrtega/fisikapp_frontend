function RecuperarContrasenaModal({ mostrar, cerrar }) {

  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Solicitud enviada</h3>
        <p>Si el correo se encuentra registrado, recibirás un enlace para restablecer tu contraseña.</p>
        <button onClick={cerrar}>Volver a iniciar sesión</button>
      </div>
    </div>
  );
}

export default RecuperarContrasenaModal;
