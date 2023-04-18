export default class VeiacoSerializer {
  fromJson(json) {
    const veiacoFromJson = {};
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

  toJson(veiaco) {
    const veiacoToJson = {};

    Object.assign(
      veiacoToJson,
      veiaco.id && { id: veiaco.id },
      veiaco.email && { email: veiaco.email },
      veiaco.name && { name: veiaco.name },
      veiaco.phone && { phone: veiaco.phone },
      veiaco.occupation && { occupation: veiaco.occupation }
    );

    return veiacoToJson;
  }
}
