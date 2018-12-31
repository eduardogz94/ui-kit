import {
  getObjects,
  createElement,
  appendElements,
  createElements,
  safeSet,
  safeChildSet,
  safeMultipleSet,
  setBorder,
  setFont,
  setFontStyle,
  setBackground,
  setDimensions,
  setPosition
} from "../core/bindingFunctions.js";

import {
  observerCallback,
  initIntersectionObserver,
  disconnectObserver
} from "../observer/index.js";

/**
 * EgForm Class
 * @extends {HTMLElement}
 */
export default class EgForm extends HTMLElement {
  /** Constructor for EgForm.
   * @class
   * @constructor
   * @public
   */
  constructor() {
    super();

    // Bind the observer so it can access the element with this.
    this.observerCallback = observerCallback.bind(this);
    this.disconnectObserver = disconnectObserver.bind(this);
    this.initIntersectionObserver = initIntersectionObserver.bind(this);

    // Bind the multiple Siva-functions.
    this.getObjects = getObjects.bind(this);
    this.createElement = createElement.bind(this);
    this.appendElements = appendElements.bind(this);
    this.createElements = createElements.bind(this);

    // Bind the component attributes functions.
    this.safeSet = safeSet.bind(this);
    this.safeChildSet = safeChildSet.bind(this);
    this.safeMultipleSet = safeMultipleSet.bind(this);

    // Bind the multiple Siva-components-style-functions.
    this.setBorder = setBorder.bind(this);
    this.setFont = setFont.bind(this);
    this.setFontStyle = setFontStyle.bind(this);
    this.setBackground = setBackground.bind(this);
    this.setDimensions = setDimensions.bind(this);
    this.setPosition = setPosition.bind(this);
  }

  /** A lifecycle method that calls when the component has finally rendered.
   * @protected
   */
  connectedCallback() {
    this.setComponent();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Form Parent"
    });

    // If IntersectionObserver is available, initialize it.
    // otherwise, simply load the image.
    //if ("IntersectionObserver" in window) this.initIntersectionObserver();
    //else this.intersecting = true;
  }

  /** A lifecycle method that calls when the component has unmounted.
   * @protected
   */
  disconnectedCallback() {    
     this.remove();
    //this.disconnectObserver();
  }

  /** A function to get the form inside the EgForm tag.
   * @protected
   */
  getComponent() {
    return this;
  }

  /** A function to set the component properties/attributes.
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.id);
    if (this.type) this.safeSet("type", this.type);
    if (this.innerText) this.safeSet("innerText", this.innerText);

    // Attriutes
    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
    if (this.css) this.safeSet("css", this.css);
  }

  /** Set the default properties/attributes for the component.
   * @protected
   */
  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }

  getInputValues() {
    let data = [];

    this.getInputs().forEach(response => {
      let id = "";
      response.id || response.id == undefined ?
        (id = response.id) :
        (id = "no id input");

      response.value !== "" ?
        data.push({
          value: response.value,
          type: typeof response.value,
          id: id,
          filled: true
        }) :
        data.push({
          value: response.value,
          type: typeof response.value,
          id: id,
          filled: false
        });
    });
    return data;
  }
}

// You must change this 3 consts after generated.
let tagName = "eg-form";
let registerDOM = () => customElements.define(tagName, EgForm);

//Async loading.
window.WebComponents ?
  window.WebComponents.waitFor(registerDOM) :
  registerDOM();
