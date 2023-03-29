import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VeiacoService from "../../service/veiaco.service";

export default function DebtPreviewTable() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [listDebt, setListDebt] = useState([]);

  useEffect(() => {
    async function init() {
      const _veiacoService = new VeiacoService();
      const veiacoDebtsResponse = await _veiacoService.listVeiacoDebt(id);
      setListDebt(veiacoDebtsResponse);
    }

    init();
  }, [id]);

  return (
    <div className="container-debt-preview-table">
      <div className="container-preview-table-headline">
        <h1>Dívidas pendentes</h1>
      </div>

      <table className="preview-table">
        <thead>
          <tr>
            <th>Nome da dívida</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {listDebt.map((debt, index) => (
            <tr
              key={index}
              onClick={() => {
                navigate(`/veiaco/divida/${debt.id}`);
              }}
            >
              <td>
                <div className="container-info-debt">
                  <label className="debt-name">{debt?.name}</label>
                  <label className="debt-cat">{debt.category?.name}</label>
                </div>
              </td>
              <td>R${debt.value}</td>
              <td>{debt.date}</td>
              <td>
                {debt.status ? (
                  <label className="status-active">Ativo</label>
                ) : (
                  <label classNaem="status-inactive">Quitado</label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
