class CCC {
  constructor() {
    this.components = [];
    this.files = [];
    this.responses = [];
  }

  registerComponent(component, configs) {
    this.components.push({
      component,
      id: configs.id,
      secret: configs.secret
    });
  }

  registerFile(file) {
    this.files.push({ file });
  }

  async initApp(url) {
    await this.chargeScript(`${url}`);
  }

  async chargeScript(url) {
    await this.addScript(`${url}`);
    this.registerFile(url + ".js");
  }

  async chargeLink(url) {
    await this.addLink(`${url}`);
    this.registerFile(url + ".css");
  }

  getComponents() {
    return this.components;
  }

  getFiles() {
    return this.files;
  }

  getResponses() {
    return this.responses;
  }

  addScript(url) {
    return new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.async = true;
      script.src = url + ".js";
      script.type = "module";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  addLink(url) {
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

  // Ponlo directo en el post, el endpoint
  async sendRequest(endpoint, options) {
    let module = await import("../other/EgFetch.js");
    let request = new module.default();
    let response = await request.post(endpoint, options, "application/json");
    this.responses.push(response);
    return response;
  }

  async logRoute(logger, router) {
    await this.chargeScript(`${logger}`);
    await this.initApp(`${router}`);
  }

  async egUIKIT() {
    ccc.chargeLink("../src/assets/css/elements");
    ccc.chargeLink("../src/assets/css/grid");
    ccc.chargeLink("../src/assets/css/responsive");
    ccc.chargeLink("../src/assets/css/utilities");
    ccc.chargeLink("../src/assets/css/animate");

    // Libs used.
    ccc.chargeLink("../libs/fontawesome/css/fontawesome-all");
    ccc.chargeLink("../libs/ionicons/css/ionicons");

    // ccc.chargeScript("../src/other/EgFetch");
  }
}
