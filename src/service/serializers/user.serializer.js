export default class UserSerializer {
  fromJson(json) {
    const userFromJson = {};
    debugger;
    Object.assign(
      userFromJson,
      json.name && { name: json.name },
      json.email && { email: json.email },
      json.id && { id: json.id }
    );

    return userFromJson;
  }

  toJson(user) {
    const userToJson = {};

    Object.assign(
      userToJson,
      user.name && { name: user.name },
      user.email && { email: user.email },
      user.password && { password: user.password }
    );

    return userToJson;
  }
}
