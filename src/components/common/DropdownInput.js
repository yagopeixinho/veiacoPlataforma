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
  const [field] = useField(props);

  return (
    <div className="input-select-container">
      <select
        {...field}
        {...props}
        value={form.values.categoryId}
        className={classes + " input-select"}
      >
        <option selected>Selecione uma categoria</option>
        {options.map((item, index) => (
          <>
            <option
              value={item.id}
              key={index}
              selected={form.values.categoryId === item.id ? true : false}
            >
              {item.name}
            </option>
          </>
        ))}
      </select>

      <ErrorMessage name={fieldName}>
        {(msg) => <div className="container-error">{msg}</div>}
      </ErrorMessage>
    </div>
  );
}
