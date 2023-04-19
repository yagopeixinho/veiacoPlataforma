import { formatDate } from "../../utils/formatDate";
import DebtSerializer from "./debt.serializer";

export default class DebtGraphicSerializer {
  constructor() {
    this.debtSerializer = new DebtSerializer();
  }

  fromJson(json) {
    const debtGraphicFromJson = {};

    Object.assign(
      debtGraphicFromJson,
      json.date && { dateLabel: formatDate(json.date) },
      json.total_value && { totalValue: json.total_value },
      json.debts && {
        debts: json.debts.map((item) => this.debtSerializer.fromJson(item)),
      }
    );

    return debtGraphicFromJson;
  }

  toJson(debtGraphic) {
    const debtGraphicToJson = {};

    Object.assign(debtGraphicToJson);

    return debtGraphic;
  }
}
