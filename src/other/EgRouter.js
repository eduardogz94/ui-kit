export default class EgRouter {
  constructor(routes, main) {
    this.routes = routes;
    this.main = main;
    this.history = [];

    this.deleteRoute = this.deleteRoute.bind(this);
  }

  navigate(path) {
    this.routes.forEach(route => {
      if (route.url === path) {
        return this.appendRoute(route);
      }
    });
  }

  checkRoutes(route) {
    let count = 0;
    this.routes.forEach(obj => {
      obj === route ? count++ : count;
    });

    return count;
  }

  logRouter() {
    console.info(this.history, this.routes, this.main);
  }

  async add(route) {
    let exist = await this.checkRoutes(route);
    if (exist === 0) {
      this.routes.push(route);
      ccc.chargeScript(route.script).catch(e => console.log(e));
    }
    this.logRouter();
  }

  async load(route) {
    let exist = await this.checkRoutes(route);
    if (exist === 0) {
      this.add(route);
      this.appendRoute(route);
    }
    this.logRouter();
  }

  deleteRoute(obj) {
    this.routes = this.routes.filter(route => route !== obj);
    this.main.removeChild(obj.component);
    this.logRouter();
  }

  appendRoute(route) {
    this.history.push(route);
    this.main.appendChild(route.component);
    if (route.lazyDOM) route.lazyDOM();
  }
}
