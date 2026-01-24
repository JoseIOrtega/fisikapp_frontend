import PlantillaDashboard from "../../componentes/PlantillaDashboard";
import MenuLaboratorios from "./componentesDashboard/MenuLaboratorios";
import TarjetaLaboratorio from "./componentesDashboard/TarjetaLaboratorio";
import '../../styles/dashboard/Dashboard.css'

function Dashboard() {

  const laboratorios = []; // luego backend
  const cargando = false;  // luego true mientras fetch


  return (
    <PlantillaDashboard
      titulo="Laboratorios" 
      usuario="Nombre de Usuario" 
      rol=""
      acciones={<MenuLaboratorios />}
    >
      <div class="buscador-laboratorios">
        ......Aqui va el input del buscador(ALEXANDRA)
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
            <TarjetaLaboratorio key={lab.laboratorio_id} laboratorio={lab} />
          ))}
        </div>
      )}

    </PlantillaDashboard>
  );
}

export default Dashboard;
