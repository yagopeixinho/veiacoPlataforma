import React from "react";
import { ErrorMessage, useField } from "formik";

export default function TextAreaInput({
  fieldName,
  label,
  classes = "",
  ...props
}) {
  const [field] = useField(props);

  return (
    <div>
      {!props.mask && (
        <textarea
          className={classes + " input-text"}
          {...field}
          {...props}
          placeholder={label}
        />
      )}

      <ErrorMessage name={fieldName}>
        {(msg) => <div className="container-error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
