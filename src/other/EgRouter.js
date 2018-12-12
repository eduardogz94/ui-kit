/**
 * EgRouter Class
 * @extends {HTMLElement}
 */
export default class EgRouter {
  /** Constructor for EgRouter.
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
        return this.render(route);
      }
    });
  }

  checkRoute(route) {
    let exist = 0;
    this.routes.forEach(obj => {
      obj === route ? exist++ : exist;
    });

    return exist;
  }

  info() {
    console.log({
      history: this.history,
      routes: this.routes,
      mainComponent: this.main
    });
  }

  async preload(route) {
    let exist = await this.checkRoute(route);
    if (exist === 0) {
      this.routes.push(route);
      ccc.chargeScript(route.script).catch(e => console.log(e));
    } else {
      console.log({ status: 401, msg: "Route already exist." });
    }
  }

  async load(route) {
    let exist = await this.checkRoute(route);
    if (exist === 0) {
      this.preload(route);
      this.render(route);
      this.info();
    } else {
      console.error({ status: 404, msg: "Route not found." });
    }
  }

  deleteRoute(obj) {
    try {
      this.routes = this.routes.filter(route => route !== obj);
      this.main.removeChild(obj.component);
      this.info();
    } catch (error) {
      console.error(error);
    }
  }

  render(route) {
    try {
      this.history.push(route);
      this.main.appendChild(route.component);
      if (route.lazyDOM) route.lazyDOM();
      this.info();
    } catch (error) {
      console.error(error);
    }
  }

  resetView() {
    try {
      let { main, routes } = this;

      main.childNodes.forEach(node => {
        if (node.localName === "eg-header") return null;
        this.routes = routes.filter(route => route.url === "/Header");
        main.removeChild(node);
      });
    } catch (error) {
      console.log({
        status: "critical",
        msg: "There was an error restarting the app."
      });
    }
  }
}
