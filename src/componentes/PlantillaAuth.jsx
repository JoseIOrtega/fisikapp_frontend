import logo from "../assets/logo.jpeg";

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