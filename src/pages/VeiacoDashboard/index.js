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
import VeiacoBarChart from "../../components/graphics/VeiacoBarChart";
import DebtGraphicService from "../../service/debt-graphic.service";
import VeiacoPieChart from "../../components/graphics/VeiacoPieChart";
import NothingFoundAlert from "../../components/common/NothingFoundAlert";
import LogoWhatsApp from "../../assets/icons/logo-whatsapp.svg";
import { fiscalNoteMessages } from "../../utils/fiscalNoteMessages";
import LoadingPage from "../../components/common/LoadingPage";

export default function VeiacoDashboard() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [veiaco, setVeiaco] = useState({});
  const [displayConfirmationDialog, setDisplayConfirmationDialog] =
    useState(false);
  const [debtBarChartData, setDebtBarChartData] = useState([]);
  const [responseDebtGraphic, setResponseDebtGraphic] = useState([]);
  const [totalDebt, setTotalDebt] = useState(0);
  const [debtList, setListDebt] = useState([]);
  const [loading, setLoading] = useState(false)

  const _veiacoService = new VeiacoService();
  const _chartService = new DebtGraphicService();

  useEffect(() => {
    async function init() {
      setLoading(true)
      const responseService = await _veiacoService.read(id);
      setVeiaco(responseService);

      const responseBarChart = await _chartService.getBarChart(id);
      setDebtBarChartData(responseBarChart);

      const responsePieChart = await _chartService.getPieChart(id);
      setResponseDebtGraphic(responsePieChart);

      const responseTotalDebt = await _chartService.totalDebt(id);
      setTotalDebt(responseTotalDebt);
      console.log(responseTotalDebt);

      const veiacoDebtsResponse = await _veiacoService.listVeiacoDebt(id);
      setListDebt(veiacoDebtsResponse);

      setLoading(false)
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function deleteVeiaco(id) {
    await _veiacoService.delete(id);

    navigate("/veiacos");
  }

  async function generateFiscalNote(id) {
    const fiscalNote = await _veiacoService.getFicaslNote(id);

    let text = `🤑 Veiaco!%0A${
      fiscalNoteMessages[Math.floor(Math.random() * fiscalNoteMessages.length)]
    } %0A%0A🧾 Nota fiscal%0A*Dívida* | *Valor* | *Data*`;

    fiscalNote.forEach((item) => {
      if (item.value && item.name) {
        text =
          text +
          "%0A" +
          item.name +
          ` - R$${item.value}, ` +
          (item.dateLabel ? item.dateLabel : "");
      }
    });

    text =
      text + "%0A%0A%0A_Essa é uma mensagem enviada utilizando o APP Veiaco_";

    window.open(
      `https://web.whatsapp.com/send?phone=${veiaco.phone}&text=${text}`
    );
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

      <LoadingPage loading={loading}>
        <div className="veiaco-dashboard-container">
          <div className="veiaco-left-side">
            <GenericOutletHeader
              pageTitle="Dashboard"
              inputSearchConfig={{ inputExist: false }}
              addItemConfig={{
                addItemExist: true,
                addItemLabel: "Adicionar dívida",
                addItemLink: `/veiaco/${id}/divida/adicionar`,
              }}
            />

            {debtList.length ? (
              <div className="grid-dashboard-info">
                {debtBarChartData.length ? (
                  <VeiacoBarChart data={debtBarChartData} />
                ) : null}

                {responseDebtGraphic.category.length ? (
                  <VeiacoPieChart data={responseDebtGraphic} />
                ) : null}

                <DebtPreviewTable />
              </div>
            ) : (
              <NothingFoundAlert message="Esse veiaco não tem nenhuma dívida" />
            )}
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
                  className="image-delete-veiaco"
                  onClick={() => {
                    setDisplayConfirmationDialog(true);
                  }}
                />
              </div>

              <div className="veiaco-contact">
                {veiaco.phone && <VeiacoLabelPhone phone={veiaco.phone} />}
                {veiaco.email && <VeiacoLabelEmail email={veiaco.email} />}
              </div>

              <div className="veiaco-actions-footer">
                {debtList.length ? (
                  <div
                    className="button-whatsapp-action"
                    onClick={() => {
                      generateFiscalNote(id);
                    }}
                  >
                    <span>
                      <img src={LogoWhatsApp} alt="Logo do APP WhatsApp" />
                    </span>
                    <span>
                      <p>Enviar nota fiscal</p>
                      <label>via WhatsApp</label>
                    </span>
                  </div>
                ) : (
                  <></>
                )}

                <div className="total-debt-container">
                  <h1>R${totalDebt.totalValue}</h1>
                  <label>Dívida total</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingPage>
    </>
  );
}
