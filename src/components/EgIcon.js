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

/**
 * EgIcon Class
 * @extends {HTMLElement}
 */
export default class EgIcon extends HTMLElement {
  /** Constructor for EgIcon.
   * @class
   * @constructor
   * @param {String} control Class for the icon.
   * @param {String} size Size of the icon.
   * @public
   */
  constructor(icon, size) {
    super();
    this.icon = icon;
    this.size = size;

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

  /** A function to return the html template of the component.
   * @template
   * @protected
   */
  template() {
    return `<i/>`;
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
      secret: "Icon Parent"
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
    this.remove()
    //this.disconnectObserver();
  }

  /** A function to get the i inside the EgIcon tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector("i");
  }

  /** A function to set the component properties/attributes.
   * @function
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.id);

    // Attributes
    if (this.icon) this.safeSet("icon", this.icon);
    if (this.size) this.safeSet("size", this.size);
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
          `${this.getAttribute(`${element}`)}-icon`
        );
      classname += `${this.getAttribute(`${element}`)} `;
    });

    this.getComponent().className = classname;
  }
}

// You must change this 3 consts after generated.
let tagName = "eg-icon";
let registerDOM = () => customElements.define(tagName, EgIcon);

//Async loading.
window.WebComponents ?
  window.WebComponents.waitFor(registerDOM) :
  registerDOM();
