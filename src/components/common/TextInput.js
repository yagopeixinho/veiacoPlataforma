import React from "react";
import { useField } from "formik";

export default function TextInput({ label, classes = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className={classes}>
      <div className="input-block">
        {props.iconleft && (
          <img className="input-icon" src={props.iconleft} alt="teste" />
        )}

        {!props.mask ? (
          <input
            className="input-text"
            {...field}
            {...props}
            placeholder={label}
          />
        ) : (
          <input
            className="input-text"
            {...field}
            {...props}
            alwaysShowMask={true}
            placeholder={label}
          />
        )}
        {props.loading && (
          <i className="pi pi-spin pi-spinner input-loading"></i>
        )}
      </div>
      <div>
        {meta.touched && meta.error ? (
          <div>{JSON.stringify(meta.error)}</div>
        ) : null}
      </div>
    </div>
  );
}
