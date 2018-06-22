class CCC {
  constructor() {
   this.components = [];
  }

  registerComponent(component, configs) {
    this.components.push({
      component: component,
      id: configs.id,
      secret: configs.secret
    });
  }

  getComponents() {
    return this.components;
  }

}