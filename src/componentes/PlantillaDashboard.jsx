
import logo from "../assets/dashboard/logo1.jpeg";
import iconoSalir from "../assets/dashboard/icono-salir.jpg";
import iconoUsuario from "../assets/dashboard/icono-usuario.jpg"
import '../styles/componentes/PlantillaDashboard.css'

function PlantillaDashboard({ 
  titulo, 
  usuario, 
  rol,
  acciones, 
  children ,
  onbuscar
}) {
  return (
    <div className="layout-dashboard">

      <header className="cabecera">
        <div className="imagen-logo-dashboard">
          <img src={logo} alt="logo" className="logo-dashboard" />
        </div>

        <div className="cabecera-texto">
          <h1 className="cabecera-titulo-principal">{titulo}</h1>
          <h2 className="cabecera-nombre-usuario">
            <img className="icono-usuario" src={iconoUsuario} alt="icono"/><span>{usuario} - {rol}</span>
          </h2>
        </div>

        <div className="icono-menu-mas">
          {acciones}
        </div>

        <div className="icono-cerrar-sesion">
          <img className="icono-salir" src={iconoSalir} alt="salir" />
        </div>
      </header>
  
      <section className="contenido-principal">
        
        {children}
      </section>
    </div>
  );
}


export default PlantillaDashboard;
