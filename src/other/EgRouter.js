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
    this.view = [];
  }

  navigate(path) {
    let rt = "";

    this.routes.forEach(route => {
      if (route.url === path) {
        // Copy the route object if theres an equals in the routes.
        rt = route;
      }
    });

    if (rt === "") {
      throw new Error(
        `Route not found, please check your routes array in /routes folder, remember to use router.load(route) or add it into the instance of new EgRouter(routes,main).`
      );
      // If route not found, go back to the last view.
      this.render(this.history.slice(-1).pop());
    } else {
      // If the route was found, make it the next view.
      this.render(rt);
    }
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
      actualView: this.view,
      mainComponent: this.main
    });
  }

  async preload(route) {
    try {
      // Preload the routes array with the new route object
      this.routes.push(route);

      // Makes the component ready to be use on the browser.
      await ccc.chargeScript(route.script);
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  load(route) {
    let exist = this.checkRoute(route);
    if (exist === 0) {
      this.preload(route);
      this.render(route);
      this.info();
    } else {
      this.render(route);
      throw new Error(
        "Route already exist, please use other router method such as navigate."
      );
    }
  }

  deleteRoute(obj) {
    try {
      let {
        main,
        routes
      } = this;

      // Deletes only the ones who are not the same and the desired route obj.
      this.view = routes.filter(route => route !== obj);
      main.removeChild(obj.component);
      this.info();
    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  render(route) {
    try {
      // Since its going be to rendered, you add it to the history and view arrs.
      this.history.push(route);
      this.view.push(route);
      this.main.appendChild(route.component);

      // Change the URL of the browser without reloading.
      history.pushState({}, null, route.url);
      this.info();
      if (route.render) route.render();
    } catch (error) {
      throw new Error(error);
    }
  }

  resetView() {
    try {
      let {
        main,
        routes
      } = this;

      // Search all the child of the main component.
      main.childNodes.forEach(node => {

        // Doesnt delete the header,
        if (node.localName === "eg-header") return null;

        // New render (Empty one, only with header)
        this.view = routes.filter(route => route.url === "/Header");
        main.removeChild(node);
      });
    } catch (error) {
      console.error("There was an error restarting the app.");
      throw new Error(error);
    }
  }
}
