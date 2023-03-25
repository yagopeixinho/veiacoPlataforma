import CoreApiService from "./core-api.service";
import VeiacoSerializer from "./serializers/veiaco.serializer";

export default class VeiacoService extends CoreApiService {
  constructor() {
    super(undefined, "veiaco", new VeiacoSerializer());
  }
}
