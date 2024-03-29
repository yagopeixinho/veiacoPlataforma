import React from "react";

export default function ButtonDelete({
  loading,
  label,
  disabled,
  type,
  styles,
  onClick,
  id = "",
}) {
  const labelStr = label ? label : "Salvar";
  const typeStr = type ? type : "button";

  return (
    <button
      className={styles}
      disabled={loading || disabled}
      type={typeStr}
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
