import '../../../styles/dashboard/MenuLaboratorios.css'
import SignoMas from '../../../assets/dashboard/icono-signo-mas2.jpg'
import UnirseLaboratorioModal from '../modalesDashboard/UnirseLaboratorioModal'
import { useState } from 'react';

function MenuLaboratorios() {

  const [mostrarModalUnirse, setMostrarModalUnirse] = useState(false);


  return (
    <div>

        aqui Va imagen y configuracion del menu

        
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