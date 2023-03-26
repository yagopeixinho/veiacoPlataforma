export default function ConfirmationDialog({
  message,
  description,
  labelConfirm,
  labelCancel,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="confirmation-dialog">
      <div className="confirmation-modal-content">
        <div className="modal-info">
          <h1>{message}</h1>
          <h5>{description}</h5>
        </div>
        <div className="confirmation-dialog-buttons">
          <button
            className="confirmation-dialog-button-confirm"
            onClick={() => {
              onConfirm();
            }}
          >
            {labelConfirm}
          </button>
          <button
            className="confirmation-dialog-button-cancel"
            onClick={() => {
              onCancel();
            }}
          >
            {labelCancel}
          </button>
        </div>
      </div>
    </div>
  );
}
