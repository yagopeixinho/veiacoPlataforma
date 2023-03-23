import avatarVeiacoCard from "../../assets/images/avatar-veiaco-card-1.png";
import { useNavigate } from "react-router-dom";
import VeiacoLabelPhone from "./VeiacoLabelPhone";

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
        <VeiacoLabelPhone />
      </div>
    </div>
  );
}
