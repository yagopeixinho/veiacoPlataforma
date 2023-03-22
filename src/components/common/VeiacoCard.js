import avatarVeiacoCard from "../../assets/images/avatar-veiaco-card.svg";
import phoneVeiaco from "../../assets/icons/phone-icon.svg";
import { useNavigate } from "react-router-dom";

export default function VeiacoCard({ name, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="veiaco-card"
      onClick={() => {
        navigate(`/veiaco/${id}/dashboard`);
      }}
    >
      <div>
        <span>
          <img src={avatarVeiacoCard} alt="Temporary Veiaco user" />
        </span>
      </div>
      <div className="veiaco-info">
        <label>{name}</label>
        <label className="veiaco-label">
          <img src={phoneVeiaco} alt="Phone icon" />
          (83) 98616-5982
        </label>
      </div>
    </div>
  );
}
