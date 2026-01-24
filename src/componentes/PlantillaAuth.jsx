import logo from "../assets/auth/logo.jpeg";
import '../styles/componentes/PlantillaAuth.css'


function PlantillaAuth({ children }){
  return (
    <div className="layout">
        <div className="imagen-logo">
            <img src={logo} alt="Logo" className="logo" />
        </div>

        {children}
        
    </div>
  );
}
export default PlantillaAuth;