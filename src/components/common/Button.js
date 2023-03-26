export default function Button({ label, styles, disabled }) {
  return (
    <button className={styles} disabled={disabled}>
      {label}
    </button>
  );
}
