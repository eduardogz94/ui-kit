/**
 * EgRouter Class
 * @extends {HTMLElement}
 */
export default class EgRouter {
  /** Constructor for EgButton.
   * @class
   * @constructor
   * @param {Array} Routes An array with all the routes inside.
   * @param {HTMLElement} MainElement A html element with the id of main (SPA struct)
   * @protected
   */
  constructor(routes, main) {
    this.routes = routes;
    this.main = main;
    this.history = [];

    this.deleteRoute = this.deleteRoute.bind(this);
  }

  navigate(path) {
    console.log(path);
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
    let router = {
      history: this.history,
      routes: this.routes,
      mainComponent: this.main
    };
    console.log(router);
  }

  async add(route) {
    let exist = await this.checkRoutes(route);
    if (exist === 0) {
      this.routes.push(route);
      ccc.chargeScript(route.script).catch(e => console.log(e));
    }
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
    this.logRouter();
  }

  restartSPA() {
    let { main, routes } = this;

    main.childNodes.forEach(node => {
      if (node.localName === "eg-header") return null;
      this.routes = routes.filter(route => route.url === "/Header");
      main.removeChild(node);
    });
  }
}
