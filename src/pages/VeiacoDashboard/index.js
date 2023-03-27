import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GenericOutletHeader from "../../components/layout/GenericOutletHeader";
import veiacoImage from "../../assets/images/avatar-veiaco-card-1.png";
import VeiacoLabelPhone from "../../components/common/VeiacoLabelPhone";
import VeiacoLabelEmail from "../../components/common/VeiacoLabelEmail";
import VeiacoService from "../../service/veiaco.service";
import EditVeiacoIcon from "../../assets/icons/edit-veiaco-icon.svg";
import DeleteVeiacoIcon from "../../assets/icons/delete-icon.svg";
import ConfirmationDialog from "../../components/modals/ConfirmationDialog";
import DebtPreviewTable from "../../components/common/DebtPreviewTable";

export default function VeiacoDashboard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [veiaco, setVeiaco] = useState({});
  const [displayConfirmationDialog, setDisplayConfirmationDialog] =
    useState(false);

  const _veiacoService = new VeiacoService();

  useEffect(() => {
    async function init() {
      const responseService = await _veiacoService.read(id);

      setVeiaco(responseService);
      debugger;
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function deleteVeiaco(id) {
    await _veiacoService.delete(id);

    navigate("/veiacos");
  }

  return (
    <>
      {displayConfirmationDialog && (
        <ConfirmationDialog
          description="Deseja mesmo apagar esse veiaco?"
          message="Cuidado!"
          labelCancel="Cancelar"
          labelConfirm="Confirmar"
          onConfirm={() => {
            deleteVeiaco(id);
          }}
          onCancel={() => {
            setDisplayConfirmationDialog(false);
          }}
        />
      )}

      <div className="veiaco-dashboard-container">
        <div className="veiaco-left-side">
          <GenericOutletHeader
            pageTitle="Dashboard"
            buttonConfig={{ buttonExist: false }}
            inputSearchConfig={{ inputExist: false }}
          />

          <DebtPreviewTable />
        </div>
        <div className="veiaco-right-side">
          <div className="container-veiaco-info">
            <div className="veiaco-image-container">
              <img src={veiacoImage} alt="Veiaco user profile" />
            </div>
            <div className="veiaco-header-info">
              <label className="veiaco-name">{veiaco.name}</label>
              <label className="veiaco-occupation">{veiaco.occupation}</label>
            </div>
            <hr className="hr-info-veiaco" />

            <div className="veiaco-actions">
              <img
                src={EditVeiacoIcon}
                alt="Veiaco user profile"
                className="image-edit-veiaco"
                onClick={() => {
                  navigate(`/veiaco/${id}/editar`);
                }}
              />
              <img
                src={DeleteVeiacoIcon}
                alt="Veiaco delete"
                className="image-edit-veiaco"
                onClick={() => {
                  setDisplayConfirmationDialog(true);
                }}
              />
            </div>

            <VeiacoLabelPhone phone={veiaco.phone} />
            <VeiacoLabelEmail email={veiaco.email} />
          </div>
        </div>
      </div>
    </>
  );
}
