import avatarVeiacoCard from "../../assets/images/avatar-veiaco-card.svg";
import phoneVeiaco from "../../assets/icons/phone-icon.svg";
export default function VeiacoCard({ name }) {
  return (
    <div className="veiaco-card">
      <div>
        <span>
          <img src={avatarVeiacoCard} alt="Temporary Veiaco user" />
        </span>
      </div>
      <div className="veiaco-info">
        <label>{name}</label>
        <label className="veiaco-label">
          <span>
            <img src={phoneVeiaco} alt="Phone icon" />
          </span>
          (83) 98616-5982
        </label>
      </div>
    </div>
  );
}
