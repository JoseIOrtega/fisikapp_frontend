import { useState } from "react";
import PlantillaDashboard from "../../componentes/PlantillaDashboard";
import MenuLaboratorios from "./componentesDashboard/MenuLaboratorios";
import TarjetaLaboratorio from "./componentesDashboard/TarjetaLaboratorio";
import '../../styles/dashboard/Dashboard.css'

function Dashboard() {
  
  const [busqueda, setBusqueda] = useState("");
  const laboratorios = [
    {
    laboratorio_id: 1,
    nombre: "Tiro parabólico",
    tema: "Cinemática",
    creador: true
  }
  ]; // luego backend
  const cargando = false;  // luego true mientras fetch
   


  return (
    <PlantillaDashboard
      titulo="Laboratorios" 
      usuario="Nombre de Usuario" 
      rol=""
      acciones={<MenuLaboratorios />}

    >

      <div className="buscador-laboratorios">
        <input
          type="text"
          placeholder="Buscar laboratorio por nombre..."
          className="input-buscador"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        
      </div>

      {cargando ? (
        <p>Cargando laboratorios...</p>
      ) : laboratorios.length === 0 ? (
        <>
          <h2 className="principal-contenedor-texto-titulo">
            Aún no tienes laboratorios
          </h2>
          <h3 className="principal-contenedor-texto-secundario">
            Crea un laboratorio o únete con un código
          </h3>
        </>
      ) : (
        <div className="contenedor-tarjetas">
          {laboratorios.map((lab) => (
            <TarjetaLaboratorio
             key={lab.laboratorio_id}
              laboratorio={lab} 
              />
          ))}
        </div>
      )}

    </PlantillaDashboard>
  );
}

export default Dashboard;
