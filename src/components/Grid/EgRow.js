import {
  getElementObjects,
  createAndAppendElement,
  appendMultipleElements,
  createMultipleElements,
  safeSet,
  safeChildSet,
  safeMultipleSet,
  setBorder,
  setFont,
  setFontStyle,
  setBackground,
  setDimensions,
  setPosition
} from "../../js/bindingFunctions.js";

import {
  observerCallback,
  initIntersectionObserver,
  disconnectObserver
} from "../../observer/index.js";

/**
 * EgRow Class
 * @extends {HTMLElement}
 */
export default class EgRow extends HTMLElement {
  /**
   * Constructor for EgRow component.
   * @constructor
   * @protected
   */
  constructor() {
    super();

    // Bind the observer so it can access the element with `this`.
    this.observerCallback = observerCallback.bind(this);
    this.disconnectObserver = disconnectObserver.bind(this);
    this.initIntersectionObserver = initIntersectionObserver.bind(this);

    // Bind the multiple Siva-functions.
    this.getElementObjects = getElementObjects.bind(this);
    this.createAndAppendElement = createAndAppendElement.bind(this);
    this.appendMultipleElements = appendMultipleElements.bind(this);
    this.createElements = createMultipleElements.bind(this);

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

  /**
   * A lyfecicle method that calls when the component has finally rendered.
   * @protected
   */
  connectedCallback() {
    this.setAttribute("class", "row");
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Row Parent"
    });

    // If IntersectionObserver is available, initialize it.
    // otherwise, simply load the image.
    if ("IntersectionObserver" in window) this.initIntersectionObserver();
    else this.intersecting = true;
  }

  /**
   * A lifecycle method that calls when the component has unmounted.
   * @protected
   */
  disconnectedCallback() {
    this.disconnectObserver();
  }

  /**
   * A function to get the component.
   * @protected
   */
  getComponent() {
    return this;
  }

  /**
   * A function to set the component properties/attributes.
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
  /**
   * Set the default properties for the EgCol element.
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

// You must change this 3 consts after generated.
let tagName = "eg-row";
let registerDOM = () => customElements.define(tagName, EgRow);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
