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
    <div>
      {!props.mask && (
        <input
          className={classes + " input-text"}
          {...field}
          {...props}
          placeholder={label}
        />
      )}

      <div>
        {meta.touched && meta.error && (
          <div className="container-error">
            <ErrorMessage name={fieldName} />
          </div>
        )}
      </div>
    </div>
  );
}
