import "../../../styles/dashboard/UnirseLaboratorioModal.css";

function UnirseLaboratorioModal({ visible, onClose, onSubmit }) {
  if (!visible) return null;

  return (
    <div className="modal">
      <div className="modal-contenido">
        <div className="modal-titulo">Unirse a laboratorio</div>

        <div className="modal-form">
          <label>Código del laboratorio:</label>
          <input type="text" />
        </div>

        <div className="modal-botones">
          <button className="btn-unirse" onClick={onSubmit}>
            Unirse
          </button>
          <button className="btn-cancelar" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default UnirseLaboratorioModal;