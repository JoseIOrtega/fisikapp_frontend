import PlantillaAuth from '../componentes/PlantillaAuth'
import "./Login.css"

function Login() {
  return (
    <PlantillaAuth>
      <p className="logo-frase">"Aprende y construye laboratorios interactivos"</p>
      <div className="formulario-login">
        <form id="formulario-login" >
          <label for="email">Correo electrónico:</label>
          <input type="email" name="email" placeholder="Ejemplo@gmail.com" required />
          <label for="password">Contraseña:</label>
          <input type="password" name="password" placeholder="Ingresa tu contraseña" required/>
          <a class="olvidaste-contrasena" >Olvidaste tu contraseña?</a>
          <input type="submit" value="Iniciar sesión" className="boton-iniciar-sesion" />
          <a className="boton-registrarse" >Registrarse</a>
        </form>
      </div>
    </PlantillaAuth>
  );
}

export default Login