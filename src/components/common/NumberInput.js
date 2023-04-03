import React from "react";
import { ErrorMessage, useField } from "formik";

export default function NumberInput({ label, classes = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <div>
      <input
        className={classes + " input-number"}
        {...field}
        {...props}
        type="number"
        placeholder={label}
        min="0"
      />

      <div>
        {meta.touched && meta.error ? (
          <div className="container-error">
            <ErrorMessage name="categoryId" />
          </div>
        ) : (
          <div className="container-error" />
        )}
      </div>
    </div>
  );
}
