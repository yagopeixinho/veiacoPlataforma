import React from "react";

export default function ButtonSave({
  loading,
  label,
  disabled,
  styles,
  onClick,
  id = "",
}) {
  const labelStr = label ? label : "Salvar";

  return (
    <button
      className={styles}
      disabled={loading || disabled}
      type="submit"
      onClick={onClick}
    >
      {loading ? (
        <div className="p-button-icon">
          <i className="pi pi-spin pi-spinner"></i>
        </div>
      ) : (
        <div className="p-button-text">{labelStr}</div>
      )}
    </button>
  );
}
