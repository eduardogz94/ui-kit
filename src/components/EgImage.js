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
 * EgImage Class
 * @extends {HTMLElement}
 */
export default class EgImage extends HTMLElement {
  /** Constructor for EgImage.
   * @class
   * @constructor
   * @param {String} src String for the src of the image.
   * @param {String} alt String for the alt of the image.
   * @public
   */
  constructor(src, alt) {
    super();
    this.src = src;
    this.alt = alt;

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

  /** A function to return the html template of the component.
   * @template
   * @protected
   */
  template() {
    return `<image/>`;
  }

  /** A lifecycle method that calls when the component has finally rendered.
   * @function
   * @protected
   */
  connectedCallback() {
    this.innerHTML = this.template();
    this.setComponent();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Image Parent"
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

  /** A function to get the image inside the EgImage tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector("img");
  }

  /** A function to set the component properties/attributes.
   * @function
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.id);
    if (this.type) this.safeSet("type", this.type);
    if (this.alt) this.safeSet("alt", this.alt);
    if (this.src) this.safeSet("src", this.src);

    //Attributes
    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
    if (this.css) this.safeSet("css", this.css);
  }

  /** Set the default properties/attributes for the component.
   * @function
   * @protected
   */
  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id")
        return this.safeChildSet(
          element,
          `${this.getAttribute(`${element}`)}-image`
        );
      if (element === "src")
        return this.setImageSource(this.getAttribute(`${element}`));
      if (element === "alt")
        return this.setImageAlt(this.getAttribute(`${element}`));
      if (element === "id") return null;
      classname += `${this.getAttribute(`${element}`)}`;
    });
    this.getComponent().className = classname;
  }

  setImageSource(src) {
    let image = this.getComponent();
    image.src = src;
  }

  setImageAlt(alt) {
    let image = this.getComponent();
    image.alt = alt;
  }
}

// You must change this 3 consts after generated.
let tagName = "eg-img";
let registerDOM = () => customElements.define(tagName, EgImage);

//Async loading.
window.WebComponents ?
  window.WebComponents.waitFor(registerDOM) :
  registerDOM();
