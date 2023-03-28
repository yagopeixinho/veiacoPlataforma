import api from "./api.service";

export default class CoreApiService {
  constructor(_parentEndpoint, _endpoint, _serializer) {
    this.parentEndpoint = _parentEndpoint;
    this.endpoint = _endpoint;
    this.serializer = _serializer;
  }

  async create(item) {
    const response = await api.post(
      `${this.endpoint}`,
      this.serializer.toJson(item)
    );
    const data = response.data;

    return this.serializer.fromJson(data.items);
  }

  async list(queryOptions = null, isListView = null) {
    const response = await api.get(
      `${this.endpoint}?${(queryOptions && queryOptions.toQueryString()) || ""}`
    );
    const data = response.data;

    if (data.items && isListView) {
      return this.convertData(data, data._meta);
    } else {
      return this.convertData(data);
    }
  }

  async listSub(parentId, isListView = null) {
    const response = await api.get(
      `${this.parentEndpoint}/${parentId}/${this.endpoint}`
    );

    const data = response.data;
    if (data.hasOwnProperty("items") && isListView) {
      return this.convertData(data, data._meta);
    } else if (data.hasOwnProperty("items")) {
      return this.convertData(data.items);
    } else {
      return this.convertData(data);
    }
  }

  async read(id) {
    const response = await api.get(`${this.endpoint}/${id}`);
    const data = response.data;
    return this.serializer.fromJson(data.items);
  }

  async update(item, id) {
    const response = await api.put(
      `${this.endpoint}/${id}`,
      this.serializer.toJson(item)
    );

    const data = response.data;

    return this.serializer.fromJson(data.items);
  }

  async delete(id) {
    const response = await api.delete(`${this.endpoint}/${id}`);
    return response;
  }

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
