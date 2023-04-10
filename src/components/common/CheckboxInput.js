import React from "react";
import { ErrorMessage, useField } from "formik";

export default function CheckboxInput({
  name,
  fieldName,
  label,
  classes = "",
  ...props
}) {
  const [field] = useField(props);

  return (
    <div className={classes + " checkbox-input-container"}>
      <label className="label-checkbox-input">{label}</label>

      <div className="input-block-checkbox">
        <input
          className="input-checkbox"
          type="checkbox"
          {...field}
          {...props}
        />
      </div>

      <ErrorMessage name={fieldName}>
        {(msg) => <div className="container-error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
