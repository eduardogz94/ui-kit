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

import {
  observerCallback,
  initIntersectionObserver,
  disconnectObserver
} from "../observer/index.js";

/**
 * EgTable Class
 * @extends {HTMLElement}
 */
export default class EgTable extends HTMLElement {
  /** Creates a EgTable.
   * @class
   * @constructor
   * @public
   */
  constructor() {
    super();

    this.body = this.createBody();
    this.head = this.createHead();
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
   * @template
   * @protected
   */
  template() {
    return "<table/>";
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
      secret: "Table Parent"
    });
  }

  /** A lifecycle method that calls when the component has unmounted.
   * @function
   * @protected
   */
  disconnectedCallback() {
    this.disconnectObserver();
  }

  /** A function to get the component inside the EgComponent tag.
   * @function
   * @protected
   */
  getComponent() {
    return this.querySelector("table");
  }

  /** A function to set the Component properties as they are received from a js instance.
   * @function
   * @protected
   */
  setComponent() {
    // Properties
    if (this.id) this.safeSet("id", this.id);
    if (this.type) this.safeSet("type", this.type);

    // Attributes
    if (this.color) this.safeSet("color", this.color);
    if (this.col) this.safeSet("col", this.col);
    if (this.offset) this.safeSet("offset", this.offset);
    if (this.css) this.safeSet("css", this.css);
  }

  /** Set the default properties for the EgComponent object.
   * @function
   * @protected
   */
  defaultProperties() {
    let classname = "table ";

    this.getAttributeNames().forEach(element => {
      if (element === "id")
        return this.safeChildSet(
          element,
          `${this.getAttribute(`${element}`)}-table`
        );

      classname += `${this.getAttribute(`${element}`)} `;
    });

    this.getComponent().className = classname;
  }

  createHeadings(...strings) {
    let tRow = document.createElement("tr");

    strings.forEach(th => {
      let elementTh = document.createElement("th");
      elementTh.innerHTML = th;
      tRow.appendChild(elementTh);
    });

    let tHead = this.head;
    tHead.appendChild(tRow);

    this.getComponent().appendChild(tHead);
    return tHead;
  }

  createData(...objs) {
    let tRow = document.createElement("tr");

    objs.forEach(td => {
      let tData = document.createElement("td");
      tData.innerHTML = td;
      tRow.appendChild(tData);
    });

    let tBody = this.body;
    tBody.appendChild(tRow);

    this.getComponent().appendChild(tBody);
    return tRow;
  }

  createBody() {
    let tBody = document.createElement("tbody");
    return tBody;
  }

  createHead() {
    let tHead = document.createElement("thead");
    return tHead;
  }
}

// You must change this 2 consts after generated.
let tagName = "eg-table";
let registerDOM = () => customElements.define(tagName, EgTable);

//Async loading.
window.WebComponents
  ? window.WebComponents.waitFor(registerDOM)
  : registerDOM();
