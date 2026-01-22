import { Link } from "react-router-dom";
import PlantillaAuth from '../componentes/PlantillaAuth'
import "./RecuperarContrasena.css"

function RecuperarContrasena() {
  return (
    <PlantillaAuth>
      
       <div className="forgot-container">
      <div className="forgot-card">

        <h2>¿Olvidaste tu contraseña?</h2>

        <p>
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>

        <input 
          type="email" 

          placeholder="Ingrese su correo"
        />

        <button>
          Enviar enlace de recuperación
        </button>

        <Link to="/"
         className="back-link">
          Volver a iniciar sesión
        </Link>

      </div>
    </div>
      
    </PlantillaAuth>
  )
}

export default RecuperarContrasena;