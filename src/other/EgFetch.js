export default class EgFetch {
  constructor() {
    this.credentials = "same-origin";
  }

  setCredentials(credentials) {
    this.credentials = credentials;
  }

  setHeaders(headers) {
    this.headers = headers;
  }

  setContentType(type) {
    this.contentType = type;
  }

  setBody(body) {
    this.body = body;
  }

  getBody() {
    return this.body;
  }

  getCredentials() {
    return this.credentials;
  }

  getHeaders() {
    return this.headers;
  }

  getContentType() {
    return this.contentType;
  }

  fetchData(endpoint, fetchOptions = null) {
    return new Promise((resolve, reject) => {
      fetch(endpoint, fetchOptions)
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(err => {
          reject(err);
          throw new Error(err);
        });
    });
  }

  withBody(method, body, headers) {
    let options = {};

    options.method = method;
    options.credentials = this.getCredentials();

    if (headers === null) {
      this.setBody(body);
      options.body = this.getBody();
    } else {
      this.setHeaders({
        "Content-Type": headers
      });
      this.setBody(JSON.stringify(body));
      options.headers = this.getHeaders();
      options.body = this.getBody();
    }
    return options;
  }

  async get(endpoint, body = {}) {
    try {
      let data = await this.fetchData(endpoint);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async post(endpoint, body = {}, headers = null) {
    try {
      let data = await this.fetchData(
        endpoint,
        this.withBody("POST", body, headers)
      );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(endpoint, body = {}, headers = null) {
    try {
      let data = await this.fetchData(
        endpoint,
        this.withBody("PUT", body, headers)
      );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(endpoint, body = {}, headers = null) {
    try {
      let data = this.fetchData(
        endpoint,
        this.withBody("DELETE", body, headers)
      );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
