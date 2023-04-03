import React from "react";
import { ErrorMessage, useField } from "formik";

export default function NumberInput({
  fieldName,
  label,
  classes = "",
  ...props
}) {
  const [field, meta] = useField(props);

  return (
    <div className={classes}>
      <div className="input-block">
        <input
          className="input-text"
          {...field}
          {...props}
          type="number"
          placeholder={label}
          min="0"
        />
      </div>
      <div>
        {meta.touched && meta.error ? (
          <div className="container-error">
            <ErrorMessage name={fieldName} />
          </div>
        ) : (
          <div className="container-error" />
        )}
      </div>
    </div>
  );
}
