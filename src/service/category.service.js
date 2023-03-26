import CoreApiService from "./core-api.service";
import CategorySerializer from "./serializers/category.serializer";

export default class CategoryService extends CoreApiService {
  constructor() {
    super(undefined, "category", new CategorySerializer());
  }
}
