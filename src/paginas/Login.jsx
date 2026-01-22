import PlantillaAuth from '../componentes/PlantillaAuth'
import "./Login.css"

function Login() {
  return (
    <PlantillaAuth>
       <div className="login-card">
        <h2 className="login-title">Fisikapp</h2>
        <p className="login-subtitle">
          Aprende y construye laboratorios interactivos
        </p>

        <form className="login-form">
          <label>Correo electrónico:</label>
          <input
            type="email"
            placeholder="Ejemplo@gmail.com"
          />

          <label>Contraseña:</label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
          />

          <a href="#" className="forgot-password">
            ¿Olvidaste tu contraseña?
          </a>

          <button type="submit" className="btn-login">
            Iniciar sesión
          </button>

          <button type="button" className="btn-register">
            Registrarse
          </button>
        </form>
      </div>  
        
    </PlantillaAuth>
  );
}

export default Login