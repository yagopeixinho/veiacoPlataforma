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
  const [field] = useField(props);

  return (
    <div>
      <input
        {...field}
        {...props}
        type="date"
        name={name}
        className={classes + " input-date"}
        lang="pt-BR"
      />

      <ErrorMessage name={fieldName}>
        {(msg) => <div className="container-error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
