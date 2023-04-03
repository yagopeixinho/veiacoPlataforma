import React from "react";
import { ErrorMessage, useField } from "formik";

export default function TextInput({
  fieldName,
  label,
  classes = "",
  ...props
}) {
  const [field, meta] = useField(props);

  return (
    <div className={classes}>
      <div>
        {!props.mask && (
          <input
            className="input-text"
            {...field}
            {...props}
            placeholder={label}
          />
        )}
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
