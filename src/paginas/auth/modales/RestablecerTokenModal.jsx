import { useNavigate } from "react-router-dom";

function RestablecerTokenModal({ mostrar, cerrar }) {
  const navigate = useNavigate();

  if (!mostrar) return null;

  const solicitarNuevoEnlace = () => {
    cerrar();                 // cierra el modal
    navigate("/recuperar-contrasena");   // redirige a recuperar contraseña
  };

  return (
    <div className="modal-registro">
      <div className="modal-registro-contenido">
        <h3>Enlace no válido</h3>
        <p>
          El enlace para restablecer la contraseña es inválido o ha vencido.
          Por favor solicita uno nuevo.
        </p>
        <button onClick={solicitarNuevoEnlace}>
          Solicitar nuevo enlace
        </button>
      </div>
    </div>
  );
}

export default RestablecerTokenModal;
