import api from "./api.service";

export default class CoreApiService {
  constructor(_parentEndpoint, _endpoint, _serializer) {
    this.parentEndpoint = _parentEndpoint;
    this.endpoint = _endpoint;
    this.serializer = _serializer;
  }

  async create(item) {
    debugger;
    const response = await api.post(
      `${this.endpoint}`,
      this.serializer.toJson(item)
    );
    const data = response.data;

    return this.serializer.fromJson(data.items);
  }

  async list() {
    const response = await api.get(`${this.endpoint}`);
    const data = response.data;

    if (data.items) {
      return this.convertData(data, data._meta);
    } else {
      return this.convertData(data);
    }
  }

  async read(id) {
    debugger;
    const response = await api.get(`${this.endpoint}/${id}`);
    const data = response.data;
    return this.serializer.fromJson(data.items);
  }

  async update(item, id) {
    debugger;
    const response = await api.put(
      `${this.endpoint}/${id}`,
      this.serializer.toJson(item)
    );

    const data = response.data;

    debugger;
    return this.serializer.fromJson(data.items);
  }

  async delete(id) {}

  convertData(data = null, meta = null) {
    if (meta) {
      const items = data.items.map((item) => this.serializer.fromJson(item));
      const _meta = this.metaSerializer.fromJson(meta);
      return { items: items, meta: _meta };
    } else {
      if (data.items) {
        const items = data.items.map((item) => this.serializer.fromJson(item));
        return items;
      } else {
        const items = data.map((item) => this.serializer.fromJson(item));
        return items;
      }
    }
  }
}
