import React from "react";
import { useField } from "formik";

export default function TextInput({ label, classes = "", ...props }) {
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
            <label className="error-label">{meta.error}</label>
          </div>
        ) : (
          <div className="container-error" />
        )}
      </div>
    </div>
  );
}
