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
    ccc.chargeLink("../src/assets/css/elements").catch(e => console.log(e));;
    ccc.chargeLink("../src/assets/css/grid").catch(e => console.log(e));;
    ccc.chargeLink("../src/assets/css/responsive").catch(e => console.log(e));;
    ccc.chargeLink("../src/assets/css/utilities").catch(e => console.log(e));;
    ccc.chargeLink("../src/assets/css/colors").catch(e => console.log(e));;
    ccc.chargeLink("../src/assets/css/animate").catch(e => console.log(e));;
    ccc.chargeLink("../libs/fontawesome/css/fontawesome-all").catch(e => console.log(e));;
    ccc.chargeLink("../libs/ionicons/css/ionicons").catch(e => console.log(e));;

    ccc.chargeScript("../src/components/Grid/EgGrid").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/Grid/EgRow").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/Grid/EgCol").catch(e => console.log(e));;

    ccc.chargeScript("../src/components/EgIcon").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/EgImage").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/EgForm").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/EgButton").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/EgInput").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/EgCard").catch(e => console.log(e));;
    ccc.chargeScript("../src/components/EgAlert").catch(e => console.log(e));;
  }
}
