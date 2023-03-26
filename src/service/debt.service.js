import CoreApiService from "./core-api.service";
import DebtSerializer from "./serializers/debt.serializer";

export default class DebtService extends CoreApiService {
  constructor() {
    super(undefined, "debt", new DebtSerializer());
  }
}
