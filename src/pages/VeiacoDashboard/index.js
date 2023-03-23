import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import veiacoImage from "../../assets/images/avatar-veiaco-card-1.png";
import VeiacoLabelPhone from "../../components/common/VeiacoLabelPhone";
import VeiacoLabelEmail from "../../components/common/VeiacoLabelEmail";

export default function VeiacoDashboard() {
  return (
    <div className="veiaco-dashboard-container">
      <GenericOutletHeader pageTitle="Dashboard" />
      <div className="veiaco-right-side">
        <div className="container-veiaco-info">
          <div className="veiaco-image-container">
            <img src={veiacoImage} alt="Veiaco user profile" />
          </div>
          <div className="veiaco-header-info">
            <label className="veiaco-name">Yuri Peixinho</label>
            <label className="veiaco-occupation">Programador</label>
          </div>

          <hr className="hr-info-veiaco" />

          <VeiacoLabelPhone />
          <VeiacoLabelEmail />
        </div>
      </div>
    </div>
  );
}
