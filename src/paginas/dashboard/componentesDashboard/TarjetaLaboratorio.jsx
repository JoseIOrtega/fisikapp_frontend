import "../../../styles/dashboard/Dashboard.css";

function TarjetaLaboratorio() {
  return (

   <div className="card">
    <div className="card-top">
      <span className="tag">Creado por ti</span>
      <span className="ra">RA</span>
    
    </div>

    <h3>Tiro parabólico</h3>
      <p>Cinemática</p>

      <div className="card-btns">
        <button className="btn ok">Ingresar</button>
        <button className="btn del">Eliminar</button>
      </div>
    </div>
  )
}

export default TarjetaLaboratorio;