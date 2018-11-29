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
  setPosition,
  onClear
} from "../js/bindingFunctions.js";

import {
  observerCallback,
  initIntersectionObserver,
  disconnectObserver
} from "../observer/index.js";

/**
 * EgCard Class
 * @extends {HTMLElement}
 */
export default class EgCard extends HTMLElement {
  /**
   * Constructor for EgCard.
   * @constructor
   * @param {String} type String as the Type of the EgCard.
   * @protected
   */
  constructor(type) {
    super();
    this.type = type;

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
    return `<div>
      <div class="card-header"></div>
      <div class="card-body"></div>
      <div class="card-footer"></div>
    </div>`;
  }

  /**
   * A lifecycle method that calls when the component has finally rendered.
   * @protected
   */
  connectedCallback() {
    this.setAttribute("card", "card");
    this.innerHTML = this.template();

    this.setComponent();
    this.defaultProperties();

    ccc.registerComponent(this, {
      id: this.id,
      secret: "Card Parent"
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
   * A function to get the div inside the EgCard tag.
   * @protected
   */
  getComponent() {
    return this.querySelector("div");
  }

  /**
   * A function to set the component properties/attributes.
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.card);
    if (this.type) this.safeSet("type", this.type);

    // Attributes
    if (this.footer) this.safeSet("footer", this.footer);
    if (this.body) this.safeSet("body", this.body);
    if (this.header) this.safeSet("header", this.header);
    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
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
          `${this.getAttribute(`${element}`)}-card`
        );
      if (element === "header")
        return this.setCardTitle(this.getAttribute(`${element}`));
      if (element === "body")
        return this.setCardBody(this.getAttribute(`${element}`));
      if (element === "footer")
        return this.setCardFooter(this.getAttribute(`${element}`));
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.getComponent().className = classname;
  }

  setCardBody(text) {
    let body = this.getComponent().querySelector(".card-body");
    let msg = document.createElement("h6");
    msg.innerHTML = text;
    body.appendChild(msg);
  }

  addToCardBody(element) {
    let body = this.getComponent().querySelector(".card-body");
    body.appendChild(element);
  }

  addMultipleObjectsToBody(...elements) {
    let body = this.getComponent().querySelector(".card-body");
    elements.forEach(element => {
      body.appendChild(element);
    });
  }

  setCardFooter(text) {
    let footer = this.getComponent().querySelector(".card-footer");
    let msg = document.createElement("h6");
    msg.innerText = text;
    footer.appendChild(msg);
  }

  addToCardFooter(element) {
    let footer = this.getComponent().querySelector(".card-footer");
    footer.appendChild(element);
  }

  addMultipleObjectsToFooter(...elements) {
    let footer = this.getComponent().querySelector(".card-footer");
    elements.forEach(element => {
      footer.appendChild(element);
    });
  }

  setCardTitle(text) {
    let header = this.getComponent().querySelector(".card-header");
    let msg = document.createElement("h6");
    msg.innerText = text;
    header.appendChild(msg);
  }

  addToCardHeader(element) {
    let header = this.getComponent().querySelector(".card-header");
    header.appendChild(element);
  }
}

// You must change this 3 consts after generated.
let tagName = "eg-card";
let registerDOM = () => customElements.define(tagName, EgCard);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
