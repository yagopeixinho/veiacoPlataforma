import phoneVeiaco from "../../assets/icons/phone-icon.svg";

export default function VeiacoLabelPhone({ phone }) {
  return (
    <>
      <label className="veiaco-label-phone">
        <img src={phoneVeiaco} alt="Phone icon" />
        {phone}
      </label>
    </>
  );
}
