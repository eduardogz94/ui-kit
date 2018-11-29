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
} from "../js/bindingFunctions.js";

/**
 * EgIcon Class
 * @extends {HTMLElement}
 */
export default class EgIcon extends HTMLElement {
  /**
   * Constructor for EgIcon.
   * @constructor
   * @param {String} control Class for the icon.
   * @param {String} size Size of the icon.
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

  /** A function to return the html template of the component.
   * @protected
   * @template
   */
  template() {
    return `<i/>`;
  }

  /**
   * A lifecycle method that calls when the component has finally rendered.
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
  }

  /**
   * A lifecycle method that calls when the component has unmounted.
   * @protected
   */
  disconnectedCallback() {
    this.disconnectObserver();
  }

  /**
   * A function to get the i inside the EgIcon tag.
   * @protected
   */
  getComponent() {
    return this.querySelector("i");
  }

  /**
   * A function to set the component properties/attributes.
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

  /**
   * Set the default properties/attributes for the component.
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
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
