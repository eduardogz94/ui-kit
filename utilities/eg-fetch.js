class Fetch {
  constructor() {
    this.headers = {};
    this.credentials = "";
  }

  fetchData(endpoint, fetchOptions) {
    return new Promise((resolve, reject) => {
      console.log(fetchOptions);
      fetch(endpoint, fetchOptions)
        .then(response => response.json())
        .then(response => resolve(response))
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }

  withBody(method, body, headers) {
    let options = { method, headers };
    if (headers === "application/json") {
      options["headers"] = { "Content-Type": headers };
      options["body"] = JSON.stringify(body);
    } else {
      options["body"] = body;
      delete options["headers"];
    }
    return options;
  }

  withoutBody() {
    return {
      //   credentials: "include"
    };
  }

  get(endpoint, body = {}, headers = this.headers) {
    return new Promise((resolve, reject) => {
      this.fetchData(endpoint, this.withoutBody())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  post(endpoint, body = {}, headers = this.headers) {
    return new Promise((resolve, reject) => {
      this.fetchData(endpoint, this.withBody("POST", body, headers))
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  update(endpoint, body = {}, headers = this.headers) {
    return new Promise((resolve, reject) => {
      this.fetchData(endpoint, this.withBody("PUT", body, headers))
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  delete(endpoint, body = {}, headers = this.headers) {
    return new Promise((resolve, reject) => {
      this.fetchData(endpoint, this.withBody("DELETE", body, headers))
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
}
