import api from "./api.service";
import CoreApiService from "./core-api.service";
import DebtSerializer from "./serializers/debt.serializer";
import VeiacoSerializer from "./serializers/veiaco.serializer";

export default class VeiacoService extends CoreApiService {
  constructor() {
    super(undefined, "veiaco", new VeiacoSerializer());
  }

  async listVeiacoDebt(parentId, isListView = null) {
    this.parentEndpoint = "debt";
    this.serializer = new DebtSerializer();
    debugger;

    const response = await api.get(
      `${this.endpoint}/${parentId}/${this.parentEndpoint}`
    );

    debugger;
    const data = response.data;

    if (data.items && isListView) {
      return this.convertData(data, data._meta);
    } else {
      return this.convertData(data);
    }
  }
}
