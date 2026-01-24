
import logo from "../assets/dashboard/logo1.jpeg";
import iconoSalir from "../assets/dashboard/icono-salir.jpg";

function PlantillaDashboard({ children }) {
  return (
    <div className="layout">
      
      <header className="cabecera">
        <div className="imagen-logo">
          <img src={logo} alt="logo" className="logo" />
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
