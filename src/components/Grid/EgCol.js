/**
 * EgCol Class
 * @extends {HTMLElement}
 */
class EgCol extends HTMLElement {
  /**
   * Creates a EgCol element acepting a col and a offset attribute,
   * @param {String} col Col attribute for the eg-col.
   * @param {String} offset Offset attribute for the eg-col.
   */
  constructor(col, offset) {
    super();
    this.col = col;
    this.offset = offset;
  }

  /**
   * A lyfecicle method that calls when the component has finally rendered.
   * @function
   * @returns {HTMLElement} Renders a EgCol component.
   */
  connectedCallback() {
    this.setCol();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Col Parent"
    });
  }

  /**
   * Set the default properties for the EgCol object.
   * @function
   * @returns {HTMLElement} Sets the default classname of the EgCol instance.
   */
  defaultProperties() {
    this.style.display = "inline-block";
    this.style.marginTop = "2.5px";

    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }

  /**
   * A function to set EgCol properties as they are received from a js instance.
   * @function
   * @returns {defaultProperties()}
   */
  setCol() {
    if (this.id) this.setAttribute("id", this.id);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.bg) this.setAttribute("bg", this.bg);
  }

  /**
   * A function to get all the specified objects passed as a string.
   * @function
   * @param {Object} obj A string as the objects to look into the EgCol.
   */
  getObjects(obj) {
    return this.querySelectorAll(`${obj}`);
  }

  /**
   * A function to add a element to append to the component.
   * @param {String} element Representing the element to add.
   */
  addSingleObject(element) {
    const object = document.createElement(`${element}`);
    this.appendChild(object);
  }

  /**
   * A function to add multiple objects into the element.
   * @param  {...any} elements All the elements that will be added into the element.
   */
  addMultipleObjects(...elements) {
    elements.forEach(element => {
      this.appendChild(element);
    });
  }

  /**
   * A function to create a element multiple times into the element.
   * @param {String} element Representing the element that will be appened n times(required).
   * @param {Int} quantity Representing the quantity of elements that will be appened(required).
   */
  createMultipleObjects(element, quantity) {
    for (let i = 0; i < quantity; i++) {
      const object = document.createElement(`${element}`);
      object.id = i;
      this.appendChild(object);
    }
  }
}

customElements.define("eg-col", EgCol);

/**
 * A function to appends and create a element into a new col.
 * @param {EgElement} Element receives a element and appends it (required).
 * @param {String} col A string for the col attribute (required).
 * @param {String} offset A string for the offset attribute (optional).
 */
const createCol = (element, col, offset = null) => {
  let newCol = new EgCol(col, offset);
  newCol.appendChild(element);

  return newCol;
};

/**
 * A function to appends a various elements into a new col and creates it.
 * @param {String} col A string for the col attribute.
 * @param {EgElements} elements receives various elements and appends them into the new col.
 */
const appendsCreateCol = (col, ...elements) => {
  let newCol = new EgCol(col);
  elements.forEach(element => {
    newCol.appendChild(element);
  });

  return newCol;
};
