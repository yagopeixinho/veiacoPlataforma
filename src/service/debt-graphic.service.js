import api from "./api.service";
import CoreApiService from "./core-api.service";
import DebtGraphicSerializer from "./serializers/debt-graphic.serializer";

export default class DebtGraphicService extends CoreApiService {
  constructor() {
    super("veiaco", undefined, new DebtGraphicSerializer());
  }

  async getBarChart(parentId, isListView = null) {
    this.endpoint = "bar_chart";

    const response = await api.get(
      `${this.parentEndpoint}/${parentId}/${this.endpoint}`
    );

    const data = response.data;
    if (data.hasOwnProperty("items") && isListView) {
      return this.convertData(data, data._meta);
    } else if (data.hasOwnProperty("items")) {
      return this.convertData(data.items);
    } else {
      return this.convertData(data);
    }
  }

  async getPieChart(parentId, isListView = null) {
    this.endpoint = "pie_chart";

    const response = await api.get(
      `${this.parentEndpoint}/${parentId}/${this.endpoint}`
    );
    debugger;

    const data = response.data;
    if (data.hasOwnProperty("items") && isListView) {
      return this.convertData(data, data._meta);
    } else if (data.hasOwnProperty("items")) {
      return this.convertData(data.items);
    } else {
      return this.convertData(data);
    }
  }
}
