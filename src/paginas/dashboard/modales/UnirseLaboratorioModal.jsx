import '../../../styles/dashboard/UnirseLaboratorioModal.css'

function UnirseLaboratorioModal({ visible, onClose, onSubmit }) {
  if (!visible) return null
  return (
    <div className="modal">
        <div className='modal-contenido'>
            ......Aqui va el modal de unirse a laboratorio (eduwar)
        </div>
    </div>
  )
}

export default UnirseLaboratorioModal