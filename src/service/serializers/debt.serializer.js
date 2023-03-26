export default class DebtSerializer {
  fromJson(json) {
    const debtFromJson = {};
    debugger;
    Object.assign(
      debtFromJson,
      json.id && { id: json.id },
      json.name && { name: json.name },
      json.value && { value: json.value },
      { open: json.open }
    );

    return debtFromJson;
  }

  toJson(debt) {
    debugger;

    const debtToJson = {};
    debugger;
    Object.assign(
      debtToJson,
      debt.id && { id: debt.id },
      debt.name && { name: debt.name },
      debt.value && { value: debt.value },
      debt.veiacoId && { veiaco_id: debt.veiacoId },
      debt.category && { category_id: debt.category },
      { open: debt.open }
    );

    return debtToJson;
  }
}
