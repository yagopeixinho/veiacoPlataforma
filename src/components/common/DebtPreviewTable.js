import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DebtService from "../../service/debt.service";

export default function DebtPreviewTable({
  name,
  category,
  value,
  date,
  status,
}) {
  const { id } = useParams();

  useEffect(() => {
    async function init() {
      const _debtService = new DebtService();
      const debts = await _debtService.list();
    }

    init();
  }, []);

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
          <tr>
            <td>
              <div className="container-info-debt">
                <label className="debt-name">{name}</label>
                <label className="debt-cat">{category}</label>
              </div>
            </td>
            <td>R${value}</td>
            <td>{date}</td>
            <td>
              {status ? (
                <label className="status-active">Ativo</label>
              ) : (
                <label className="status-inactive">Quitado</label>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
