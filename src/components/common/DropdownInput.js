import { ErrorMessage, useField } from "formik";

export default function DropdownInput({
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
    <div className="input-select-container">
      <select
        {...field}
        {...props}
        value={form.values.categoryId}
        className={classes + "input-select"}
      >
        {options.map((item, index) => (
          <option value={item.id} key={index}>
            {item.name}
          </option>
        ))}
      </select>
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
