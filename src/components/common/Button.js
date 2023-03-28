export default function Button({ label, styles, disabled, ...props }) {
  return (
    <button className={styles} disabled={disabled} {...props}>
      {label}
    </button>
  );
}
