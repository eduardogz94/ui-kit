export default class EgRouter {
  constructor(routes, parent) {
    this.routes = routes;
    this.parent = parent;
    this.history = [];
  }

  async get(pageName) {
    this.routes.forEach(element => {
      if (element.name === pageName) {
        return this.appendRoute(element);
      }
    });
  }

  checkRoutes(route) {
    let test = 0;
    this.routes.forEach(element => {
      element === route ? test++ : test;
    });

    return test;
  }

  async add(route) {
    let exist = await this.checkRoutes(route);
    if (exist === 0) {
      this.routes.push(route);
      ccc.chargeScript(route.url).catch(e => console.log(e));
    }
    console.log(this.routes);
  }

  async load(route) {
    let exist = await this.checkRoutes(route);
    if (exist === 0) {
      this.add(route);
      this.appendRoute(route);
    }
  }

  removeChild(child) {
    console.log(child);
    this.parent.removeChild(child.render);
    console.log(this.history);
  }

  appendRoute(route) {
    this.history.push(route);
    this.parent.appendChild(route.render);
    if (route.lazyDOM) route.lazyDOM();
  }
}
