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
} from "../../core/bindingFunctions.js";

import {
  observerCallback,
  initIntersectionObserver,
  disconnectObserver
} from "../../observer/index.js";

/**
 * EgGrid Class
 * @extends {HTMLElement}
 */
export default class EgGrid extends HTMLElement {
  /** Constructor for EgRow component.
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
  }

  /** A lyfecicle method that calls when the component has finally rendered.
   * @function
   * @protected
   */
  connectedCallback() {
    this.safeSet("class", "container-fluid");
    this.setComponent();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Grid Parent"
    });

    // If IntersectionObserver is available, initialize it.
    // otherwise, simply load the image.
    //if ("IntersectionObserver" in window) this.initIntersectionObserver();
    //else this.intersecting = true;
  }

  /** A lifecycle method that calls when the component has unmounted.
   * @function
   * @protected
   */
  disconnectedCallback() {     
    this.remove();
    //this.disconnectObserver();
  }

  /** A function to get the component.
   * @function
   * @protected
   */
  getComponent() {
    return this;
  }

  /** A function to set the component properties/attributes.
   * @function
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.id);

    // Attributes
    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
    if (this.css) this.safeSet("css", this.css);
    if (this.bg) this.safeSet("bg", this.bg);
  }
  /** Set the default properties for the EgCol element.
   * @function
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
}

// You must change this 2 consts after generated.
let tagName = "eg-grid";
let registerDOM = () => customElements.define(tagName, EgGrid);

//Async loading.
window.WebComponents ?
  window.WebComponents.waitFor(registerDOM) :
  registerDOM();
