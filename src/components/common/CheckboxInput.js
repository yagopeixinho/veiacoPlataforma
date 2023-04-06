import React from "react";
import { ErrorMessage } from "formik";

export default function CheckboxInput({ fieldName, label, classes = "" }) {
  return (
    <div className={classes + " checkbox-input-container"}>
      <label className="label-checkbox-input">{label}</label>

      <div className="input-block-checkbox">
        <input className="input-checkbox" type="checkbox" />
      </div>

      <ErrorMessage name={fieldName}>
        {(msg) => <div className="container-error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
