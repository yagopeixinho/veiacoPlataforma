import { Col } from "reactstrap";
import avatarVeiacoCard from "../../../../assets/images/avatar-veiaco-card-1.png";

export default function VeiacoCard({ veiaco, onClick }) {
  return (
    <Col md="3" lg="3" xl="3">
      <div className="veiaco-modal-card" onClick={() => onClick(veiaco)}>
        <img src={avatarVeiacoCard} alt="Temporary Veiaco user" />
        <div className="card-info">
          <span>{veiaco.name}</span>
        </div>
      </div>
    </Col>
  );
}
