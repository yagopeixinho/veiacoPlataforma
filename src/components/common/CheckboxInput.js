import React from "react";
import { useField } from "formik";

export default function CheckboxInput({ label, classes = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className={classes + "checkbox-input-container"}>
      <label htmlFor={props.id || props.name} className="label-checkbox-input">
        {label}
      </label>

      <div className="input-block-checkbox">
        <input
          className="input-checkbox"
          {...field}
          {...props}
          type="checkbox"
        />
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
