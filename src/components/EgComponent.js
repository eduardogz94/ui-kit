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
 * EgComponent Class
 * @extends {HTMLElement}
 */
export default class EgComponent extends HTMLElement {
  /** Creates a EgComponent.
   * @class
   * @constructor
   * @public
   */
  constructor() {
    super();

    // Bind the observer so it can access the element with `this`.
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

    // Bind the multiple Siva components style functions.
    this.setBorder = setBorder.bind(this);
    this.setFont = setFont.bind(this);
    this.setFontStyle = setFontStyle.bind(this);
    this.setBackground = setBackground.bind(this);
    this.setDimensions = setDimensions.bind(this);
    this.setPosition = setPosition.bind(this);

    // // Bind the value functions.
    this.onClear = onClear.bind(this);

    // // Bind regexp functions.
    this.caps = caps.bind(this);
    this.lowerCaps = lowerCaps.bind(this);
    this.integer = integer.bind(this);
    this.floatTest = floatTest.bind(this);
  }

  /** A function to return the html template of the component.
   * @template
   * @protected
   */
  template() {
    return "WRITE SOMETHING HERE";
  }

  /** A lyfecicle method that calls when the component has finally rendered.
   * @function
   * @protected
   */
  connectedCallback() {
    this.innerHTML = this.template();
    this.setComponent();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Component Parent"
    });
  }

  /** A lifecycle method that calls when the component has unmounted.
   * @function
   * @protected
   */
  disconnectedCallback() {     
    this.remove();
    //this.disconnectObserver();
  }

  /** A function to get the component inside the EgComponent tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector("YOU WRITE IN EHRE TOO");
  }

  /** A function to set the Component properties as they are received from a js instance.
   * @function
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.id);
    if (this.type) this.safeSet("type", this.type);
    if (this.placeholder) this.safeSet("placeholder", this.placeholder);

    // Attributes
    if (this.control) this.safeSet("control", this.control);
    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
    if (this.css) this.safeSet("css", this.css);
  }

  /** Set the default properties for the EgComponent object.
   * @function
   * @protected
   */
  defaultProperties() {
    let classname = "";

    this.getAttributeNames().forEach(element => {
      if (element === "id")
        return this.safeChildSet(
          element,
          `${this.getAttribute(`${element}`)}-component`
        );
      if (element === "type")
        return this.safeChildSet(element, `${this.getAttribute(`${element}`)}`);

      classname += `${this.getAttribute(`${element}`)} `;
    });

    this.className = classname;
  }
}

// You must change this 2 consts after generated.
let tagName = "eg-component";
let registerDOM = () => customElements.define(tagName, EgComponent);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
