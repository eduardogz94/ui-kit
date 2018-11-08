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
    await this.files.push({ file });
  }

  async initApp(url) {
    await this.chargeScript(`${url}`);
  }

  async chargeScript(url) {
    this.addScript(`${url}`).catch(e => console.log(e));
    await this.registerFile(url + ".js");
  }

  async chargeLink(url) {
    this.addLink(`${url}`)
      .then(await this.registerFile(url + ".css"))
      .catch(e => console.log(e));
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
    await this.chargeScript("Other/EgFetch");
    let http = new Http();
    let response = await http.request("POST", "./Siva", options);
    return response;
  }

  async startLoggerAndApp(logger, loader) {
    await this.chargeScript(`${logger}`);
    await this.initApp(`${loader}`);
  }
}
