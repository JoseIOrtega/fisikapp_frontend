import logo from "../assets/logo.jpeg";

function PlantillaAuth({ children }){
  return (
    <div className="layout">
        <div className="imagen-logo">
            <img src={logo} alt="Logo" className="logo" />
        </div>
        <p className="logo-frase">Registro - Crear Cuenta</p>
        <div className="card">
            {children}
        </div>
    </div>
  );
}
export default PlantillaAuth;