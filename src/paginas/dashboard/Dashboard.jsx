import PlantillaDashboard from "../../componentes/PlantillaDashboard";
import '../../styles/dashboard/Dashboard.css'

function Dashboard() {
  return (
    <PlantillaDashboard>

      <div className="buscador-laboratorios">
        <input
          type="text"
          placeholder="Buscar laboratorio por nombre..."
          className="input-buscador"
        />
      </div>

      <div className="mensaje-vacio">
        <h2>Aún no tienes laboratorios</h2>
        <p>Crea un laboratorio o únete con un código</p>
      </div>

    </PlantillaDashboard>
  );
}

export default Dashboard;
