import { useNavigate } from "react-router-dom";

function RestablecerExitoModal({ mostrar, cerrar }) {
  const navigate = useNavigate();

  if (!mostrar) return null;

  const irALogin = () => {
    cerrar();          // cierra el modal
    navigate("/");     // o "/login" según tu ruta
  };

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Contraseña actualizada</h3>
        <p>
          Tu contraseña ha sido actualizada correctamente.
          <br />
          Ya puedes iniciar sesión con tu nueva contraseña.
        </p>
        <button onClick={irALogin}>
          Ir a iniciar sesión
        </button>
      </div>
    </div>
  );
}

export default RestablecerExitoModal;
