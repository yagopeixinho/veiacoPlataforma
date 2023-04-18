import api from "./api.service";
import UserSerializer from "./serializers/user.serializer";
import UserService from "./user.service";

export default class AuthenticationService {
  constructor() {
    this.user = null;
    this.userSerializer = new UserSerializer();
    this.userService = new UserService();
  }

  async singIn(email, password) {
    const res = await api.post(
      "token",
      { email, password },
      {
        headers: {
          Authorization: "Basic " + btoa(`${email}:${password}`),
        },
      }
    );

    localStorage.setItem("TOKEN_KEY", res.data.token);

    return (AuthenticationService._user = this.userSerializer.fromJson(
      res.data.user
    ));
  }
}
