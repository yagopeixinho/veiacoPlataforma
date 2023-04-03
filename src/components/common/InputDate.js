import { ErrorMessage, useField } from "formik";

export default function InputDate({
  name,
  form,
  options,
  label,
  fieldName,
  classes = "",
  ...props
}) {
  const [field, meta] = useField(props);

  return (
    <div>
      <input
        {...field}
        {...props}
        type="date"
        name={name}
        value={form?.values.date}
        className={classes + " input-date"}
      />

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
