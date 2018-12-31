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
 * EgAlert Class
 * @extends {HTMLElement}
 */
export default class EgAlert extends HTMLElement {
  /** Constructor for EgAlert.
   * @class
   * @constructor
   * @public
   */
  constructor(type, text) {
    super();

    this.type = type;
    this.text = text;

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
    return `<div>
              <h4 class="alert-title"></h4>
              <h6 class="alert-msg"></h6>
              <div class="alert-body"></div>
          </div>`;
  }

  /**
   * A lifecycle method that calls when the component has finally rendered.
   * @function
   * @protected
   */
  connectedCallback() {
    this.safeSet("role", "alert");
    this.innerHTML = this.template();
    this.setComponent();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Alert Parent"
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

  /** A function to get the div inside the EgAlert tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector("div");
  }

  /** A function to set the component properties/attributes.
   * @function
   * @protected
   */
  setComponent() {
    if (this.id) this.getComponent().setAttribute("id", `${this.id}-alert`);
    if (this.type) this.safeSet("type", this.type);

    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
    if (this.css) this.safeSet("css", this.css);
    if (this.title) this.safeSet("title", this.title);
    if (this.close) this.safeSet("close", this.close);
    if (this.text) this.safeSet("text", this.text);
  }

  /** Set the default properties/attributes for the component.
   * @function
   * @protected
   */
  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      if (element === "id") return null;
      if (element === "text")
        return this.setMessage(this.getAttribute(`${element}`));
      if (element === "title")
        return this.setTitle(this.getAttribute(`${element}`));
      if (element === "close") this.setCloseButton();
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getComponent().className = classname;
    this.getComponent().setAttribute("role", "alert");
  }

  setMessage(text) {
    let alert = this.getComponent().querySelector(".alert-msg");
    alert.innerHTML = text;
  }

  setTitle(text) {
    let alert = this.getComponent().querySelector(".alert-title");
    alert.innerHTML = text;
  }

  setCloseButton() {
    let main = this.getComponent();
    let alert = main.querySelector(".alert-body");
    let alertButton = document.createElement("button");
    let buttonX = document.createElement("span");

    alertButton.className = "close";
    alertButton.setAttribute("data-dismiss", "alert");
    alertButton.setAttribute("arial-label", "Close");

    buttonX.setAttribute("aria-hidden", "true");
    buttonX.innerHTML = "&times";
    buttonX.onclick = function() {
      main.className = "collapse";
    };

    alertButton.appendChild(buttonX);
    alert.appendChild(alertButton);
  }
}

// You must change this 2 consts after generated.
let tagName = "eg-alert";
let registerDOM = () => customElements.define(tagName, EgAlert);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
