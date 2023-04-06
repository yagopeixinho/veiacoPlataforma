import CoreApiService from "./core-api.service";
import UserSerializer from "./serializers/user.serializer";

export default class UserService extends CoreApiService {
  constructor() {
    super(undefined, "users", new UserSerializer());
  }
}
