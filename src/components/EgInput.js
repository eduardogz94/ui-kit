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
  setPosition,
  onClear
} from "../core/bindingFunctions.js";

import { caps, lowerCaps, integer, floatTest } from "../core/regexp.js";

import {
  observerCallback,
  initIntersectionObserver,
  disconnectObserver
} from "../observer/index.js";

/**
 * EgInput Class
 * @extends {HTMLElement}
 */
export default class EgInput extends HTMLElement {
  /** Constructor for EgInput.
   * @class
   * @constructor
   * @param {String} control Class for the form-control style.
   * @param {String} type Type of the input.
   * @public
   */
  constructor(control, type) {
    super();
    this.control = control;
    this.type = type;

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
    return `<input/>`;
  }

  /**
   * A lifecycle method that calls when the component has finally rendered.
   * @function
   * @protected
   */
  connectedCallback() {
    this.innerHTML = this.template();
    this.setComponent();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Input Parent"
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

  /** A function to get the input inside the EgInput tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector("input");
  }

  /** A function to set the component properties/attributes.
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
          `${this.getAttribute(`${element}`)}-input`
        );

      if (element === "placeholder")
        return this.safeChildSet(element, `${this.getAttribute(`${element}`)}`);

      if (element === "type")
        return this.safeChildSet(element, `${this.getAttribute(`${element}`)}`);

      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getComponent().className = classname;
    this.className = "form-group";
  }

  /** A function to receive the specified input data.
   * @function
   * @protected
   */
  getInputValue() {
    let response = this.getComponent();
    let id = "";

    response.id || response.id == undefined
      ? (id = response.id)
      : (id = "no id input");

    let data = {
      value: response.value,
      type: typeof response.value,
      id: id
    };

    response.value !== "" ? (data.filled = true) : (data.filled = false);

    return data;
  }

  /** A function to validate a input length.
   * @function
   * @protected
   */
  validateValue(length) {
    let input = this.getInputValue();
    if (input.value.length <= length - 1) {
      this.setFormControl("form-control-warning");
      return false;
    } else if (input.value.length <= 0) {
      this.setFormControl("form-control-danger");
      return false;
    } else {
      this.setFormControl("form-control-success");
      return true;
    }
  }

  /** A function to validate a input email value.
   * @function
   * @param {String} [emailType] A string as the type to validate.
   * @protected
   */
  validateEmail(emailType) {
    if (this.getComponent().getAttribute("type") === "email") {
      let input = this.getInputValue();
      if (input.value.search(emailType) === -1) {
        this.setFormControl("form-control-danger");
        return false;
      } else {
        this.setFormControl("form-control-success");
        return true;
      }
    }
  }

  /** A function to set the form-control attribute of the input.
   * @function
   * @param {String} [value] A string as the form-control attribute value.
   * @protected
   */
  setFormControl(value) {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      if (element === "class") return null;
      if (element === "control") return null;
      if (element === "placeholder") return null;
      if (element === "type") return null;
      classname += `${this.getAttribute(`${element}`)} `;
    });

    this.getComponent().className = `${classname} form-control ${value}`;
  }
}

// You must change this 2 consts after generated.
let tagName = "eg-input";
let registerDOM = () => customElements.define(tagName, EgInput);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
