class EgRow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.setAttribute("class", "row");
    this.defaultProperties();
    ccc.registerComponent(this, {
      id: this.id,
      secret: "Row Parent"
    });
  }

  defaultProperties() {
    let classname = "";
    this.getAttributeNames().forEach(element => {
      classname += `${this.getAttribute(`${element}`)} `;
    });
    this.className = classname;
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

customElements.define("eg-row", EgRow);
