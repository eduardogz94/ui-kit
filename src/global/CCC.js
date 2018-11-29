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
    try {
      await this.addScript(`${url}`);
      await this.registerFile(url + ".js");
    } catch (error) {
      console.log(error);
    }
  }

  async chargeLink(url) {
    try {
      await this.addLink(`${url}`);
      await this.registerFile(url + ".css");
    } catch (error) {
      console.log(error);
    }
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
      script.type = "module";
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

  async egUIKIT() {
    try {
      // Style links.
      ccc.chargeLink("../src/assets/css/elements");
      ccc.chargeLink("../src/assets/css/grid");
      ccc.chargeLink("../src/assets/css/responsive");
      ccc.chargeLink("../src/assets/css/utilities");
      ccc.chargeLink("../src/assets/css/colors");
      ccc.chargeLink("../src/assets/css/animate");

      // Libs used.
      ccc.chargeLink("../libs/fontawesome/css/fontawesome-all");
      ccc.chargeLink("../libs/ionicons/css/ionicons");
    } catch (error) {
      console.log(error);
    }
  }
}
