import React from "react";
import { ErrorMessage, useField } from "formik";

export default function NumberInput({
  fieldName,
  label,
  classes = "",
  ...props
}) {
  const [field] = useField(props);

  return (
    <div>
      <input
        className={classes + " input-number"}
        {...field}
        {...props}
        type="number"
        placeholder={label}
        min="0"
        step="0.01"
      />

      <ErrorMessage name={fieldName}>
        {(msg) => <div className="container-error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
