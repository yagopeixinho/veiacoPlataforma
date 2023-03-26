import React from "react";
import { useField } from "formik";

export default function NumberInput({ label, classes = "", ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className={classes}>
      <label htmlFor={props.id || props.name}>{label}</label>

      <div className="input-block">
        {props.iconleft && (
          <img className="input-icon" src={props.iconleft} alt="teste" />
        )}

        {!props.mask ? (
          <input className="input-text" {...field} {...props} type="number" />
        ) : (
          <input
            className="input-text"
            {...field}
            {...props}
            alwaysShowMask={true}
            type="number"
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
