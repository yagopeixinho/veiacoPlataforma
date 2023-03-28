export default class CategorySerializer {
  fromJson(json) {
    const categoryFromJson = {};

    Object.assign(
      categoryFromJson,
      json.id && { id: json.id },
      json.name && { name: json.name }
    );

    return categoryFromJson;
  }

  toJson(category) {
    const categoryToJson = {};
    Object.assign(
      categoryToJson,
      category.id && { id: category.id },
      category.name && { name: category.name },
      category.value && { value: category.value },
      { open: category.open }
    );

    return category;
  }
}
