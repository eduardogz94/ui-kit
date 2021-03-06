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
 * EgButton Class
 * @extends {HTMLElement}
 */
export default class EgButton extends HTMLElement {
  /** Constructor for EgButton.
   * @class
   * @constructor
   * @param {String} btn Class for the eg-button.
   * @public
   */
  constructor(btn) {
    super();
    this.btn = btn;

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
    return `<button>${this.innerText}</button>`;
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
      secret: "Button Parent"
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

  /** A function to get the button inside the EgButton tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector("button");
  }

  /** A function to set the Button properties as they are received from a js instance.
   * @function
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.id);
    if (this.type) this.safeSet("type", this.type);
    if (this.innerText) this.safeSet("innerText", this.innerText);

    // Attributes
    if (this.btn) this.safeSet("btn", this.btn);
    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
    if (this.css) this.safeSet("css", this.css);
  }

  /** Set the default properties for the EgButton object.
   * @function
   * @protected
   */
  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id")
        return this.safeChildSet(
          element,
          `${this.getAttribute(`${element}`)}-button`
        );
      if (element === "innertext")
        return this.safeChildSet(element, `${this.getAttribute(`${element}`)}`);
      if (element === "type")
        return this.safeChildSet(element, `${this.getAttribute(`${element}`)}`);
      if (element === "onclick")
        return this.safeChildSet(element, `${this.getAttribute(`${element}`)}`);
      if (element === "icon")
        return this.addIcon(this.getAttribute(`${element}`));
      if (element === "btn")
        return (classname += `btn ${this.getAttribute(`${element}`)} `);

      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getComponent().className = classname;
  }

  /** A function to add an icon to the EgButton.
   * @function
   * @param {String} icon as the class for the icon(required).
   * @protected
   */
  addIcon(icon) {
    let egIcon = new EgIcon(icon);
    egIcon.safeSet("css", "ml-1");
    this.getComponent().appendChild(egIcon);
  }
}

// You must change this 3 consts after generated.
let tagName = "eg-button";
let registerDOM = () => customElements.define(tagName, EgButton);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
