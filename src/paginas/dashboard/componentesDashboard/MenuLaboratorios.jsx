import '../../../styles/dashboard/MenuLaboratorios.css'
import SignoMas from '../../../assets/dashboard/icono-signo-mas2.jpg'
import UnirseLaboratorioModal from '../modalesDashboard/UnirseLaboratorioModal'
import { useState } from 'react';

function MenuLaboratorios() {

  const [mostrarModalUnirse, setMostrarModalUnirse] = useState(false);
  const [mostrarOpciones, setMostrarOpciones] = useState(false);



  return (
    
    <div className="acciones-menu">
      <br />
  <button
    className="btn-add"
    title="Add New"
    onClick={() => setMostrarOpciones(!mostrarOpciones)}
  >
    <svg
      className="btn-icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="circle"
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      />
      <path className="line" d="M8 12H16" />
      <path className="line" d="M12 16V8" />
    </svg>
  </button>

  {mostrarOpciones && (
    <div className="dropdown-menu">
      <button onClick={() => alert("Crear laboratorio")}>
        Crear
      </button>

      <button onClick={() => alert("Unirse a laboratorio")}>
        Unirse
      </button>
    </div>
  )}

    <UnirseLaboratorioModal visible={mostrarModalUnirse} 
          onClose={() => setMostrarModalUnirse(false)} 
          onSubmit={(e) => {e.preventDefault();
                            setMostrarModalUnirse(false);}
                    }
        />

    </div>
  )
}

export default MenuLaboratorios