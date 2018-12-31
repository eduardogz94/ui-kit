//Registering component into the customElements API
export let registerDOM = (tagName, component) => {
  customElements.define(tagName, component);
}

// Waits until the component is upgrated and available.
export let lazyLoad = (registerDOM) => {
  window.WebComponents ?  window.WebComponents.waitFor(registerDOM) : registerDOM();
}
