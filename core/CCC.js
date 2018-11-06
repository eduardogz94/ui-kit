class CCC {
  constructor() {
    this.components = [];
    this.files = [];
  }

  registerComponent(component, configs) {
    this.components.push({
      component,
      id: configs.id,
      secret: configs.secret
    });
  }

  async registerFile(file) {
    this.files.push({ file });
  }

  async initApp() {
    await this.addScript("utilities/eg-loader");
  }

  async chargeScript(url) {
    await this.addScript(`${url}`);
    await this.registerFile(url + ".js");
  }

  async chargeLink(url) {
    await this.addLink(`${url}`);
    await this.registerFile(url + ".css");
  }

  getComponents() {
    return this.components;
  }

  getFiles() {
    return this.files;
  }

  async addScript(url) {
    return new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.async = true;
      script.src = url + ".js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async addLink(url) {
    return new Promise((resolve, reject) => {
      let link = document.createElement("link");
      link.async = true;
      link.rel = "stylesheet";
      link.href = url + ".css";
      link.onload = resolve;
      link.onerror = reject;
      document.head.appendChild(link);
    });
  }

  async sendRequest(options) {
    await this.addScript("utilities/eg-fetch");
    let http = new Http();
    let response = await http.request("POST", "./Siva", options);
    return response;
  }

  async startLogger() {
    await this.addScript("libs/log4javascript");
    await this.initApp();
  }
}
