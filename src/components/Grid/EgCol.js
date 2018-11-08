class EgCol extends HTMLElement {
  constructor(col, offset) {
    super();
    this.col = col;
    this.offset = offset;
  }

  connectedCallback() {
    this.setCol();
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Col Parent"
    });
  }

  defaultProperties() {
    this.style.display = "inline-block";
    this.style.marginTop = "2.5px";

    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
  }

  setCol() {
    if (this.id) this.setAttribute("id", this.id);
    if (this.col) this.setAttribute("col", this.col);
    if (this.offset) this.setAttribute("offset", this.offset);
    if (this.bg) this.setAttribute("bg", this.bg);
  }

  getObjects(obj) {
    return this.querySelectorAll(`${obj}`);
  }

  addSingleObject(element) {
    const object = document.createElement(`${element}`);
    this.appendChild(object);
  }

  addMultipleObjects(...elements) {
    elements.forEach(element => {
      this.appendChild(element);
    });
  }

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
