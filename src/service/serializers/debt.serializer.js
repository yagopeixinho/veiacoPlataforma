import CategorySerializer from "./category.serializer";

export default class DebtSerializer {
  constructor() {
    this.categorySerializer = new CategorySerializer();
  }

  fromJson(json) {
    const debtFromJson = {};

    Object.assign(
      debtFromJson,
      json.id && { id: json.id },
      json.name && { name: json.name },
      json.value && { value: json.value },
      json.category && {
        categoryId: json.category.id.toString(),
        category: this.categorySerializer.fromJson(json.category),
      },
      json.created_on && {
        createdOn: json.created_on,
      },
      { status: json.status }
    );

    return debtFromJson;
  }

  toJson(debt) {
    const debtToJson = {};
    Object.assign(
      debtToJson,
      debt.id && { id: debt.id },
      debt.name && { name: debt.name },
      debt.value && { value: debt.value },
      debt.veiacoId && { veiaco_id: debt.veiacoId },
      debt.categoryId && {
        category_id: parseInt(debt.categoryId),
      },
      { status: debt.status }
    );

    return debtToJson;
  }
}
