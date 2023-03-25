import emailIcon from "../../assets/icons/email-icon.png";

export default function VeiacoLabelEmail({ email }) {
  return (
    <>
      <label className="veiaco-label-email">
        <img src={emailIcon} alt="Phone icon" />
        {email}
      </label>
    </>
  );
}
