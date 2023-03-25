export default class VeiacoSerializer {
  fromJson(json) {
    const veiacoFromJson = {};
    debugger;
    Object.assign(
      veiacoFromJson,
      json.id && { id: json.id },
      json.email && { email: json.email },
      json.name && { name: json.name },
      json.phone && { phone: json.phone },
      json.occupation && { occupation: json.occupation }
    );

    return veiacoFromJson;
  }

  toJson(veiaco) {}
}
