function RegistrarModal({ mostrar, cerrar }) {
  if (!mostrar) return null;

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Registro exitoso</h3>
        <p>Tu cuenta ha sido creada correctamente.</p>
        <button onClick={cerrar}>Ir a iniciar sesión</button>
      </div>
    </div>
  );
}

export default RegistrarModal;
